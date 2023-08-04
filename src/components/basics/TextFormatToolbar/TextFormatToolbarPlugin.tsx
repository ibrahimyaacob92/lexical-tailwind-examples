import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import clsx from "clsx";
import { FORMAT_TEXT_COMMAND, type TextFormatType } from "lexical";

type Props = {
  className?: string;
};

export default function TextFormatToolbarPlugin({ className }: Props) {
  const [editor] = useLexicalComposerContext();

  const handleTextFormat = (textFormat: TextFormatType) => {
    editor.dispatchCommand(FORMAT_TEXT_COMMAND, textFormat);
  };
  return (
    <div className={clsx("flex gap-1", className)}>
      <button
        className="rounded border p-2 "
        onClick={() => handleTextFormat("bold")}
      >
        Bold
      </button>
      <button
        className="rounded border p-2"
        onClick={() => handleTextFormat("underline")}
      >
        Underline
      </button>
      <button
        className="rounded border p-2"
        onClick={() => handleTextFormat("italic")}
      >
        Italic
      </button>
      <button
        className="rounded border p-2"
        onClick={() => handleTextFormat("highlight")}
      >
        Highlight
      </button>
      <button
        className="rounded border p-2"
        onClick={() => handleTextFormat("code")}
      >
        Code
      </button>
      <button
        className="rounded border p-2"
        onClick={() => handleTextFormat("strikethrough")}
      >
        Strikethrough
      </button>
      <button
        className="rounded border p-2"
        onClick={() => handleTextFormat("subscript")}
      >
        Subscript
      </button>
      <button
        className="rounded border p-2"
        onClick={() => handleTextFormat("superscript")}
      >
        Superscript
      </button>
    </div>
  );
}
