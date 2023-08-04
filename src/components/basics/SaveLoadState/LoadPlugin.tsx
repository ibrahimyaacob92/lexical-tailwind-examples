import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { type LexicalEditor } from "lexical";

type Props = {
  onLoadSuccess?: (editor: LexicalEditor) => void;
  onLoadError?: () => void;
};

export default function LoadPlugin({ onLoadSuccess, onLoadError }: Props) {
  const [editor] = useLexicalComposerContext();

  const handleFileInput = (files: FileList | null) => {
    const file = files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string;
        try {
          const editorState = editor.parseEditorState(content);
          editor.setEditorState(editorState);
          onLoadSuccess?.(editor);
        } catch (error) {
          console.log("error", error);
          onLoadError?.();
        }
      };

      reader.readAsText(file);
    }
  };

  const handleButtonClick = () => {
    // Programmatically trigger the hidden file input
    const fileInput = document.getElementById("fileInput");
    fileInput?.click();
  };

  return (
    <div>
      <input
        id="fileInput"
        type="file"
        onChange={(e) => handleFileInput(e.target.files)}
        className="hidden"
      />
      <button className="rounded border p-2" onClick={handleButtonClick}>
        Load
      </button>
    </div>
  );
}
