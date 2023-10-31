import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import clsx from "clsx";
import { $getSelection, $isElementNode, $isRangeSelection, FORMAT_ELEMENT_COMMAND, type ElementFormatType } from "lexical";
import { useEffect, useState } from "react";
type Props = {
  className?: string;
};

export default function AlignFormatToolbarPlugin({ className }: Props) {
  const [editor] = useLexicalComposerContext();
  const [elementFormat, setElementFormat] = useState<ElementFormatType>('left');



  const handleTextFormat = (paragraphType: ElementFormatType) => {
    editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, paragraphType);
  };

  // Register change lister
  useEffect(() => {
    editor.registerUpdateListener(() => {
      editor.update(() => {
        const selection = $getSelection();
        if ($isRangeSelection(selection)) {
          const node = selection.anchor.getNode();
          const parent = node.getParent()
          if ($isElementNode(node)) {
            setElementFormat(node.getFormatType())
          } else {
            setElementFormat(parent?.getFormatType() ?? 'left')
          }
        }
      })
    })
  }, [editor])

  return (
    <div className={clsx("flex gap-1", className)}>
      <button
        className={clsx("rounded border p-2", elementFormat === 'left' && 'bg-green-200')}
        onClick={() => handleTextFormat("left")}
      >
        Left
      </button>
      <button
        className={clsx("rounded border p-2", elementFormat === 'center' && 'bg-green-200')}
        onClick={() => handleTextFormat("center")}
      >
        Center
      </button>
      <button
        className={clsx("rounded border p-2", elementFormat === 'right' && 'bg-green-200')}
        onClick={() => handleTextFormat("right")}
      >
        Right
      </button>
    </div>
  );
}
