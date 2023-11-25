"use client";

import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { mergeRegister } from "@lexical/utils";
import clsx from "clsx";
import {
  CAN_REDO_COMMAND,
  CAN_UNDO_COMMAND,
  COMMAND_PRIORITY_CRITICAL,
  REDO_COMMAND,
  UNDO_COMMAND,
} from "lexical";
import { useEffect, useState } from "react";

type Props = {
  className?: string;
};

export default function UndoRedoPlugin({ className }: Props) {
  const [editor] = useLexicalComposerContext();
  const [canUndo, setCanUndo] = useState(false);
  const [canRedo, setCanRedo] = useState(false);

  const handleUndo = () => {
    editor.dispatchCommand(UNDO_COMMAND, undefined);
  };
  const handleRedo = () => {
    editor.dispatchCommand(REDO_COMMAND, undefined);
  };

  // Register change lister
  useEffect(() => {
    return mergeRegister(
      editor.registerCommand<boolean>(
        CAN_UNDO_COMMAND,
        (payload) => {
          setCanUndo(payload);
          return false;
        },
        COMMAND_PRIORITY_CRITICAL
      ),
      editor.registerCommand<boolean>(
        CAN_REDO_COMMAND,
        (payload) => {
          setCanRedo(payload);
          return false;
        },
        COMMAND_PRIORITY_CRITICAL
      )
    );
  }, [editor]);

  return (
    <div className={clsx("flex flex-wrap gap-1", className)}>
      <button
        className={clsx("rounded border p-2", "disabled:opacity-50")}
        onClick={() => handleUndo()}
        disabled={!canUndo}
      >
        Undo
      </button>
      <button
        className={clsx("rounded border p-2", "disabled:opacity-50")}
        disabled={!canRedo}
        onClick={() => handleRedo()}
      >
        Redo
      </button>
    </div>
  );
}
