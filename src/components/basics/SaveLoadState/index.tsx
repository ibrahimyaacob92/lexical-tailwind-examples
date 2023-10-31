import { CLEAR_EDITOR_COMMAND, type EditorThemeClasses } from "lexical";

import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import TreeViewPlugin from "../WithTreeViewPlugin/TreeViewPlugin";
import LoadPlugin from "./LoadPlugin";
import SavePlugin from "./SavePlugin";

const theme: EditorThemeClasses = {
  ltr: "ltr",
  rtl: "rtl",
  paragraph: "text-black",
  span: "bg-gray-200",
};

const Editor = () => {
  const initialConfig = {
    namespace: "MyEditor",
    theme,
    onError: () => console.log("error"),
  };

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <div className="editor-wrapper relative">
        <RichTextPlugin
          contentEditable={
            <ContentEditable className="content-editable min-h-[100px] rounded-md border p-2 " />
          }
          placeholder={
            <div className="absolute left-2 top-2">Enter some text...</div>
          }
          ErrorBoundary={LexicalErrorBoundary}
        />
      </div>
      {/*  UI Plugin */}
      <div className="flex gap-2 mt-2 justify-end">
        <SavePlugin
          onSaveCallback={(editor) =>
            editor.dispatchCommand(CLEAR_EDITOR_COMMAND, undefined)
          }
        />
        <LoadPlugin
          onLoadSuccess={(editor) => editor.focus()}
          onLoadError={() => alert("fail to load")}
        />
      </div>

      {/* Functional Plugin */}
      <OnChangePlugin
        onChange={(editorState) => {
          console.log(
            "do anything with the editor state here",
            editorState.toJSON()
          );
        }}
      />
      <HistoryPlugin />
      <br />

      {/* Debug Plugin */}
      <TreeViewPlugin />
    </LexicalComposer>
  );
};

export default Editor;
