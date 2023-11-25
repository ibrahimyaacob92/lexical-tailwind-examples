"use client";

import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import {
  $getSelectionStyleValueForProperty,
  $patchStyleText,
} from "@lexical/selection";
import clsx from "clsx";
import { $getSelection, $isRangeSelection } from "lexical";
import { useEffect, useState } from "react";
type Props = {
  className?: string;
};

const fontSizes = ["8px", "15px", "20px", "30px"];
const defaultFontSize = "15px";

export default function FontSizesToolbarPlugin({ className }: Props) {
  const [editor] = useLexicalComposerContext();
  const [fontSize, setFontSize] = useState<string>(defaultFontSize);

  const updateFontSize = (fontSize: string) => {
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        $patchStyleText(selection, {
          "font-size": fontSize,
        });
      }
    });
  };

  // Register change lister
  useEffect(() => {
    editor.registerUpdateListener(() => {
      editor.update(() => {
        const selection = $getSelection();
        if ($isRangeSelection(selection)) {
          setFontSize(
            $getSelectionStyleValueForProperty(
              selection,
              "font-size",
              defaultFontSize
            )
          );
        }
      });
    });
  }, [editor]);

  return (
    <div className={clsx("flex gap-1", className)}>
      {fontSizes.map((fz) => (
        <button
          key={fz}
          className={clsx(
            "rounded border p-2",
            fontSize === fz && "bg-green-200"
          )}
          onClick={() => updateFontSize(fz)}
        >
          {fz}
        </button>
      ))}
    </div>
  );
}
