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

const fontFamilies = ["sans", "sans-serif", "monospace", "system-ui"];

export default function FontFamilyToolbarPlugin({ className }: Props) {
  const [editor] = useLexicalComposerContext();
  const [fontFamily, setFontFamily] = useState<string>("system-ui");

  const updateFontFamily = (fontFamily: string) => {
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        $patchStyleText(selection, {
          "font-family": fontFamily,
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
          setFontFamily(
            $getSelectionStyleValueForProperty(selection, "font-family", "15px")
          );
        }
      });
    });
  }, [editor]);

  return (
    <div className={clsx("flex gap-1", className)}>
      {fontFamilies.map((font) => (
        <button
          key={font}
          className={clsx(
            "rounded border p-2",
            fontFamily === font && "bg-green-200"
          )}
          onClick={() => updateFontFamily(font)}
        >
          {font}
        </button>
      ))}
    </div>
  );
}
