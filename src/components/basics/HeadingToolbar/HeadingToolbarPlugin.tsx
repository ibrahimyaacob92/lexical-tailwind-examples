import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $createHeadingNode, $isHeadingNode, type HeadingTagType } from "@lexical/rich-text";
import { $setBlocksType } from "@lexical/selection";
import clsx from "clsx";
import { $getSelection, $isElementNode, $isRangeSelection, DEPRECATED_$isGridSelection, type ElementNode } from "lexical";
import { useEffect, useState } from "react";

type Props = {
  className?: string;
};

const headings: HeadingTagType[] = ['h1', 'h2', 'h3', 'h4', 'h5']

export default function HeadersToolbarPlugin({ className }: Props) {
  const [editor] = useLexicalComposerContext();
  const [blockType, setBlockType] = useState<HeadingTagType>();

  const formatHeading = (headingSize: HeadingTagType) => {
    if (blockType !== headingSize) {
      editor.update(() => {
        const selection = $getSelection();
        if (
          $isRangeSelection(selection) ||
          DEPRECATED_$isGridSelection(selection)
        ) {
          $setBlocksType(selection, () => $createHeadingNode(headingSize));
        }
      });
    }
  };

  // Register change lister
  useEffect(() => {
    editor.registerUpdateListener(() => {
      editor.update(() => {
        const selection = $getSelection();
        if ($isRangeSelection(selection)) {
          const node = selection.anchor.getNode();
          const parent = node.getParent()
          let element: ElementNode | null;

          if ($isElementNode(node)) {
            element = node
          } else {
            element = parent
          }

          if ($isHeadingNode(element)) {
            setBlockType(element.getTag())
          } else {
            setBlockType(undefined)
          }
        }
      })
    })
  }, [editor])


  return (
    <div className={clsx("flex gap-1", className)}>
      {headings.map((h) => <button
        key={h}
        className={clsx("rounded border p-2", blockType === h && 'bg-green-200')}
        onClick={() => formatHeading(h)}
      >
        {h}
      </button>)}

    </div>
  );
}
