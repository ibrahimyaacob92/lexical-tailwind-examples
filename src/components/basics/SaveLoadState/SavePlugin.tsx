import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { type LexicalEditor } from "lexical";
import { exportData } from "./utils";

type Props = {
  onSaveCallback?: (editor: LexicalEditor) => void;
};

export default function SavePlugin({ onSaveCallback }: Props) {
  const [editor] = useLexicalComposerContext();

  const handleExport = () => {
    exportData(editor.getEditorState().toJSON());
    onSaveCallback?.(editor);
  };
  return (
    <button className="rounded border p-2" onClick={() => handleExport()}>
      Save
    </button>
  );
}
