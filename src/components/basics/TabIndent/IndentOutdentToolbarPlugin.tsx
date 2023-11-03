import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { TabIndentationPlugin } from '@lexical/react/LexicalTabIndentationPlugin';
import clsx from "clsx";
import {
  INDENT_CONTENT_COMMAND,
  OUTDENT_CONTENT_COMMAND
} from "lexical";



type Props = {
  className?: string;
};

export default function IndentOutdentToolbarPlugin({ className }: Props) {
  const [editor] = useLexicalComposerContext();


  const handleIndent = () => {
    editor.dispatchCommand(INDENT_CONTENT_COMMAND, undefined);
  };
  const handleOutdent = () => {
    editor.dispatchCommand(OUTDENT_CONTENT_COMMAND, undefined);
  };


  return (
    <>
      <div className={clsx("flex flex-wrap gap-1", className)}>
        <button
          className={clsx("rounded border p-2", "disabled:opacity-50")}
          onClick={() => handleIndent()}
        >
          Indent
        </button>
        <button
          className={clsx("rounded border p-2", "disabled:opacity-50")}
          onClick={() => handleOutdent()}
        >
          Outdent
        </button>
      </div>
      <TabIndentationPlugin />
    </>
  );
}
