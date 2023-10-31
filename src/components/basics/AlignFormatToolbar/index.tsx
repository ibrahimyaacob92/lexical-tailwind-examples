import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { type EditorThemeClasses } from "lexical";
import DefaultContentPlugin from "../WithDefaultContent/DefaultContentPlugin";
import TreeViewPlugin from "../WithTreeViewPlugin/TreeViewPlugin";
import AlignFormatToolbarPlugin from "./AlignFormatToolbarPlugin";

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
      <AlignFormatToolbarPlugin className="mb-2" />
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

      {/* Functional Plugin */}
      <OnChangePlugin
        onChange={(editorState) => {
          //  do something
        }}
      />
      <DefaultContentPlugin defaultText={["Left", "Center", "Right"]} />
      <HistoryPlugin />
      <br />

      {/* Debug Plugin */}
      <TreeViewPlugin />
    </LexicalComposer>
  );
};

export default Editor;
