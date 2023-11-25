"use client";

import { type EditorThemeClasses } from "lexical";
import { useState } from "react";

import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";

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
      <div className="editor-wrapper relative">
        <RichTextPlugin
          contentEditable={
            <ContentEditable className="content-editable min-h-20 rounded-md border p-2" />
          }
          placeholder={
            <div className="pointer-events-none absolute left-2 top-2  text-gray-500">
              Enter some text...
            </div>
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
      <p className="my-2 text-sm font-semibold">
        Stringified JSON Editor State Output
      </p>
      <pre className="text-xs">{jsonedState}</pre>
    </LexicalComposer>
  );
};

export default RichText;
