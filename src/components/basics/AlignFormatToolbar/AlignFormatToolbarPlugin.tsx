import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import clsx from "clsx";
import { FORMAT_ELEMENT_COMMAND, type ElementFormatType } from "lexical";

type Props = {
  className?: string;
};

export default function AlignFormatToolbarPlugin({ className }: Props) {
  const [editor] = useLexicalComposerContext();

  const handleTextFormat = (paragraphType: ElementFormatType) => {
    editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, paragraphType);
  };
  return (
    <div className={clsx("flex gap-1", className)}>
      <button
        className="rounded border p-2 "
        onClick={() => handleTextFormat("left")}
      >
        Left
      </button>
      <button
        className="rounded border p-2"
        onClick={() => handleTextFormat("center")}
      >
        Center
      </button>
      <button
        className="rounded border p-2"
        onClick={() => handleTextFormat("right")}
      >
        Right
      </button>
    </div>
  );
}
