import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { TreeView } from "@lexical/react/LexicalTreeView";

type Props = {
  showRaw?: boolean;
};

export default function TreeViewPlugin({ showRaw }: Props) {
  const [editor] = useLexicalComposerContext();
  return (
    <div className="relative">
      <p className="text-sm font-semibold">Treeview with styling</p>

      <TreeView
        viewClassName="bg-gray-800 text-white text-sm p-2 max-h-[400px] overflow-x-scroll"
        timeTravelPanelClassName=""
        timeTravelPanelSliderClassName=""
        timeTravelPanelButtonClassName="bg-white text-black p-1 rounded"
        treeTypeButtonClassName={"bg-white text-green-600 p-1 rounded"}
        timeTravelButtonClassName="bg-white text-blue-600 p-1 rounded absolute right-2 "
        editor={editor}
      />

      {showRaw && (
        <>
          <hr className="my-2" />
          <p className="text-sm font-semibold">
            Treeview without styling (except for the border)
          </p>
          <TreeView
            viewClassName="p-2 border"
            timeTravelPanelClassName=""
            timeTravelPanelSliderClassName=""
            timeTravelButtonClassName=""
            timeTravelPanelButtonClassName=""
            treeTypeButtonClassName={""}
            editor={editor}
          />
        </>
      )}
    </div>
  );
}
