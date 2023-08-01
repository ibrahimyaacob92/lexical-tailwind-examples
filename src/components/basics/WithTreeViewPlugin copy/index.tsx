import React, { useState } from "react";
import { EditorThemeClasses } from "lexical";

import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import TreeViewPlugin from "./TreeViewPlugin";

const theme: EditorThemeClasses = {
  ltr: "ltr",
  rtl: "rtl",
  paragraph: "text-red-700",
  span: "bg-gray-200",
};

const RichTextWithTreeViewPlugin = () => {
  const [jsonedState, setJsonState] = useState("");
  const initialConfig = {
    namespace: "MyEditor",
    theme,
    onError: () => console.log("error"),
  };

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <div className="editor-wrapper relative p-4">
        <RichTextPlugin
          contentEditable={
            <ContentEditable className="content-editable min-h-20 rounded-md border p-2" />
          }
          placeholder={
            <div className="absolute left-6 top-6">Enter some text...</div>
          }
          ErrorBoundary={LexicalErrorBoundary}
        />
      </div>
      {/*  UI Plugin */}
      <div className="relative p-4">
        <TreeViewPlugin showRaw />
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
      <hr />
    </LexicalComposer>
  );
};

export default RichTextWithTreeViewPlugin;
