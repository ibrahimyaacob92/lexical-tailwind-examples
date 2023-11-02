import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { type EditorThemeClasses } from "lexical";
import DefaultContentPlugin from "../WithDefaultContent/DefaultContentPlugin";
import TreeViewPlugin from "../WithTreeViewPlugin/TreeViewPlugin";
import HeadersToolbarPlugin from "./FontSizesToolbar";

const theme: EditorThemeClasses = {
  ltr: "ltr",
  rtl: "rtl",
  paragraph: "text-black",
  text: {
    bold: "font-extrabold",
    underline: "underline",
    strikethrough: "line-through",
  },
};

const Editor = () => {
  const initialConfig = {
    namespace: "MyEditor",
    theme,
    onError: (error: unknown) => console.log({ error }),
  };

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <HeadersToolbarPlugin className="mb-2" />
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
      <DefaultContentPlugin
        defaultText={[
          "Try H1 heading here",
          "Try H2 heading here",
          "Try H3 heading here",
          "Try H4 heading here",
          "Try H5 heading here",
        ]}
      />
      <HistoryPlugin />
      <br />

      {/* Debug Plugin */}
      <TreeViewPlugin />
    </LexicalComposer>
  );
};

export default Editor;
