"use client";

import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import clsx from "clsx";
import {
  $getSelection,
  $isRangeSelection,
  FORMAT_TEXT_COMMAND,
  type TextFormatType,
} from "lexical";
import { useEffect, useState } from "react";

type Props = {
  className?: string;
};

export default function TextFormatToolbarPlugin({ className }: Props) {
  const [editor] = useLexicalComposerContext();
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [isStrikethrough, setIsStrikethrough] = useState(false);
  const [isHighlight, setIsHighlight] = useState(false);
  const [isCode, setIsCode] = useState(false);
  const [isSubscript, setIsSubscript] = useState(false);
  const [isSuperscript, setIsSuperscript] = useState(false);

  const handleTextFormat = (textFormat: TextFormatType) => {
    editor.dispatchCommand(FORMAT_TEXT_COMMAND, textFormat);
  };

  // Register change lister
  useEffect(() => {
    editor.registerUpdateListener(() => {
      editor.update(() => {
        const selection = $getSelection();
        if ($isRangeSelection(selection)) {
          setIsBold(selection.hasFormat("bold"));
          setIsItalic(selection.hasFormat("italic"));
          setIsUnderline(selection.hasFormat("underline"));
          setIsStrikethrough(selection.hasFormat("strikethrough"));
          setIsSubscript(selection.hasFormat("subscript"));
          setIsSuperscript(selection.hasFormat("superscript"));
          setIsHighlight(selection.hasFormat("highlight"));
          setIsCode(selection.hasFormat("code"));
        }
      });
    });
  }, [editor]);

  return (
    <div className={clsx("flex flex-wrap gap-1", className)}>
      <button
        className={clsx("rounded border p-2", isBold && "bg-green-300")}
        onClick={() => handleTextFormat("bold")}
      >
        Bold
      </button>
      <button
        className={clsx("rounded border p-2", isUnderline && "bg-green-300")}
        onClick={() => handleTextFormat("underline")}
      >
        Underline
      </button>
      <button
        className={clsx("rounded border p-2", isItalic && "bg-green-300")}
        onClick={() => handleTextFormat("italic")}
      >
        Italic
      </button>
      <button
        className={clsx("rounded border p-2", isHighlight && "bg-green-300")}
        onClick={() => handleTextFormat("highlight")}
      >
        Highlight
      </button>
      <button
        className={clsx("rounded border p-2", isCode && "bg-green-300")}
        onClick={() => handleTextFormat("code")}
      >
        Code
      </button>
      <button
        className={clsx(
          "rounded border p-2",
          isStrikethrough && "bg-green-300"
        )}
        onClick={() => handleTextFormat("strikethrough")}
      >
        Strikethrough
      </button>
      <button
        className={clsx("rounded border p-2", isSubscript && "bg-green-300")}
        onClick={() => handleTextFormat("subscript")}
      >
        Subscript
      </button>
      <button
        className={clsx("rounded border p-2", isSuperscript && "bg-green-300")}
        onClick={() => handleTextFormat("superscript")}
      >
        Superscript
      </button>
    </div>
  );
}
