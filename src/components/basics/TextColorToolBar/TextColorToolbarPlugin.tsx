import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import {
  $getSelectionStyleValueForProperty,
  $patchStyleText
} from '@lexical/selection';
import clsx from "clsx";
import { $getSelection, $isRangeSelection } from "lexical";
import { useEffect, useState } from "react";
type Props = {
  className?: string;
};

const colors = ['black', 'red', 'green', 'blue', 'yellow']
const defaultColor = 'black'

export default function ColorToolbarPlugin({ className }: Props) {
  const [editor] = useLexicalComposerContext();
  const [color, setColor] = useState<string>(defaultColor);

  const updateColor = (color: string) => {
    editor.update(() => {
      const selection = $getSelection();
      if (
        $isRangeSelection(selection)
      ) {
        $patchStyleText(selection, {
          'color': color,
        });
      }
    });
  }

  // Register change lister
  useEffect(() => {
    editor.registerUpdateListener(() => {
      editor.update(() => {
        const selection = $getSelection();
        if ($isRangeSelection(selection)) {
          setColor(
            $getSelectionStyleValueForProperty(selection, 'color', defaultColor),
          );

        }
      })
    })
  }, [editor])


  return (
    <div className={clsx("flex gap-1", className)}>
      {colors.map((font) => <button
        key={font}
        className={clsx("rounded border p-2"
          , color === font && 'bg-green-200'
        )}
        onClick={() => updateColor(font)}
      >
        {font}
      </button>
      )}
    </div>)
}
