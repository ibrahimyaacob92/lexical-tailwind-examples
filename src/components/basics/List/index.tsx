"use client";

import { type EditorThemeClasses } from "lexical";

import { ListItemNode, ListNode } from "@lexical/list";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import DefaultContentPlugin from "../WithDefaultContent/DefaultContentPlugin";
import TreeViewPlugin from "../WithTreeViewPlugin/TreeViewPlugin";
import ListToolbarPlugin from "./ListToolbarPlugin";

// ! List without markdown is pretty unusable
// TODO: Make the feature toggleable (remove formatting)
const theme: EditorThemeClasses = {
  ltr: "ltr",
  rtl: "rtl",
  paragraph: "text-black",
  list: {
    listitem: "ml-6",
    listitemChecked: "pl-2",
    listitemUnchecked: "pl-2 text-orange-600",
    nested: {
      listitem: "pl-2",
    },
    olDepth: [
      "list-decimal pl-2",
      "list-decimal",
      "list-decimal",
      "list-decimal",
      "list-decimal",
    ],
    ul: "list-disc pl-2",
  },

  // NOTE: Styling with out of the box needs to be done with css
};

const Editor = () => {
  const initialConfig = {
    namespace: "MyEditor",
    theme,
    onError: () => console.log("error"),
    nodes: [ListNode, ListItemNode],
  };

  return (
    <LexicalComposer initialConfig={initialConfig}>
      {/* !  */}
      <ListToolbarPlugin className="mb-2" />
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
      <DefaultContentPlugin
        defaultText={[
          "Try out list using button above",
          "numbered list",
          "bullet list",
        ]}
      />
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
