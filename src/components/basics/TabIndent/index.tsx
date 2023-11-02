import { type EditorThemeClasses } from "lexical";

import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { TabIndentationPlugin } from '@lexical/react/LexicalTabIndentationPlugin';
import DefaultContentPlugin from "../WithDefaultContent/DefaultContentPlugin";
import TreeViewPlugin from "../WithTreeViewPlugin/TreeViewPlugin";


const theme: EditorThemeClasses = {
  ltr: "ltr",
  rtl: "rtl",
  paragraph: "text-black",
  // NOTE: Styling with out of the box needs to be done with css
};

const Editor = () => {
  const initialConfig = {
    namespace: "MyEditor",
    theme,
    onError: () => console.log("error"),
  };

  return (
    <LexicalComposer initialConfig={initialConfig}>
      {/* !  */}
      <TabIndentationPlugin />
      <div className="editor-wrapper relative">
        <RichTextPlugin
          contentEditable={
            <ContentEditable className="content-editable min-h-20 rounded-md border p-2 focus:outline-none" />
          }
          placeholder={
            <div className="absolute left-2 top-2">Enter some text...</div>
          }
          ErrorBoundary={LexicalErrorBoundary}
        />
      </div>
      {/*  UI Plugin */}

      {/* Functional Plugin */}
      <DefaultContentPlugin defaultText={["Hit tab key to see indent in action"]} />
      <OnChangePlugin
        onChange={(editorState) => {
          // do something when stuff changes
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
