import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { INSERT_HORIZONTAL_RULE_COMMAND } from '@lexical/react/LexicalHorizontalRuleNode';
import { HorizontalRulePlugin } from '@lexical/react/LexicalHorizontalRulePlugin';
import clsx from "clsx";

type Props = {
  className?: string;
};

export default function HorizontalRuleToolbarPlugin({ className }: Props) {
  const [editor] = useLexicalComposerContext();

  const insertHorizontalRule = () => {
    editor.dispatchCommand(INSERT_HORIZONTAL_RULE_COMMAND, undefined);
  };

  return (
    <>
      <div className={clsx("flex flex-wrap gap-1", className)}>
        <button
          className={clsx("rounded border p-2", "disabled:opacity-50")}
          onClick={insertHorizontalRule}
        >
          Insert Horizontal Rule
        </button>
      </div>
      {/* Plugin that handles the listener of the plugin */}
      <HorizontalRulePlugin />
    </>
  );
}
