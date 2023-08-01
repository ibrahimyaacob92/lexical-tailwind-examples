import React, { useState } from "react";
import { EditorThemeClasses } from "lexical";

import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";

const theme: EditorThemeClasses = {
  ltr: "ltr",
  rtl: "rtl",
  paragraph: "text-red-700",
  span: "bg-gray-200",
};

const RichText = () => {
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
            <ContentEditable className="content-editable h-20 rounded-md border p-2" />
          }
          placeholder={
            <div className="absolute left-6 top-6">Enter some text...</div>
          }
          ErrorBoundary={LexicalErrorBoundary}
        />
      </div>
      <OnChangePlugin
        onChange={(editorState) =>
          setJsonState(JSON.stringify(editorState.toJSON(), undefined, 2))
        }
      />
      <HistoryPlugin />
      <hr />
      <pre>{jsonedState}</pre>
    </LexicalComposer>
  );
};

export default RichText;
