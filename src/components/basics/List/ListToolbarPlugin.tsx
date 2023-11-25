"use client";

import {
  $createListNode,
  $isListNode,
  ListNode,
  type ListType,
} from "@lexical/list";

import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { $setBlocksType } from "@lexical/selection";
import { $findMatchingParent, $getNearestNodeOfType } from "@lexical/utils";
import clsx from "clsx";
import { $getSelection, $isRangeSelection, $isRootOrShadowRoot } from "lexical";
import { useEffect, useState } from "react";
type Props = {
  className?: string;
};

export default function ListToolbarPlugin({ className }: Props) {
  const [editor] = useLexicalComposerContext();
  const [blockListType, setBlockListType] = useState<ListType>();

  const formatHeading = (listType: ListType) => {
    if (blockListType !== listType) {
      editor.update(() => {
        const selection = $getSelection();
        if ($isRangeSelection(selection)) {
          $setBlocksType(selection, () => $createListNode(listType));
        }
      });
    }
  };

  // Register change lister
  useEffect(() => {
    return editor.registerUpdateListener(() => {
      editor.update(() => {
        const selection = $getSelection();
        if ($isRangeSelection(selection)) {
          const anchorNode = selection.anchor.getNode();
          const element =
            anchorNode.getKey() === "root"
              ? anchorNode
              : $findMatchingParent(anchorNode, (e) => {
                  const parent = e.getParent();
                  return parent !== null && $isRootOrShadowRoot(parent);
                });
          console.log({ element });
          if ($isListNode(element)) {
            const parentList = $getNearestNodeOfType<ListNode>(
              anchorNode,
              ListNode
            );
            const type = parentList
              ? parentList.getListType()
              : element.getListType();
            setBlockListType(type);
          }
        }
      });
    });
  }, [editor]);

  return (
    <>
      <div className={clsx("flex flex-wrap gap-1", className)}>
        <button
          className={clsx(
            "rounded border p-2",
            blockListType === "number" && "bg-green-200"
          )}
          onClick={() => formatHeading("number")}
        >
          Numbered List
        </button>
        <button
          className={clsx(
            "rounded border p-2",
            blockListType === "bullet" && "bg-green-200"
          )}
          onClick={() => formatHeading("bullet")}
        >
          Bullet List
        </button>
        {/* <button
          className={clsx("rounded border p-2", blockListType === 'check' && 'bg-green-200')}
          onClick={() => formatHeading('check')}
        >
          Check List
        </button> */}
      </div>
      <ListPlugin />
    </>
  );
}
