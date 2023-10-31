import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { type EditorThemeClasses } from "lexical";
import TreeViewPlugin from "../WithTreeViewPlugin/TreeViewPlugin";
import DefaultContentPlugin from "./DefaultContentPlugin";

const theme: EditorThemeClasses = {
  ltr: "ltr",
  rtl: "rtl",
  paragraph: "text-black",
  text: {
    bold: 'font-extrabold',
    underline: 'underline',
    strikethrough: 'line-through'
  }
};
// Replacing the editor state with this
const WithDefaultContent = () => {
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
            <ContentEditable className="content-editable rounded-md border p-2 min-h-20" />
          }
          placeholder={
            <div className="absolute left-2 top-2 opacity-50">Enter some text...</div>
          }
          ErrorBoundary={LexicalErrorBoundary}
        />
      </div>
      {/*  UI Plugin */}
      <div className="relative py-4">
        <TreeViewPlugin />
      </div>

      {/* Functional Plugin */}
      <DefaultContentPlugin defaultText={["hello world"]} />
      <OnChangePlugin
        onChange={(editorState) => {
          // Do something here
        }}
      />
      <HistoryPlugin />
      <hr />
    </LexicalComposer>
  );
};

export default WithDefaultContent;
