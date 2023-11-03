import { type ReactNode } from "react";
import { BasicPage } from "~/types/pageList";
import NoDocYet from "../NoDocYet";
import AlignFormatToolbarPlugin from "./AlignFormatToolbar";
import FontFamilyToolbar from "./FontFamilyToolBar";
import FontSizesToolBar from "./FontSizesToolBar";
import HeadingToolbar from "./HeadingToolbar";
import HorizontalRule from "./HorizontalRule";
import List from "./List";
import PlainStupid from "./PlainStupid";
import Doc from "./PlainStupid/Doc";
import RichText from "./RichText";
import SaveLoadState from "./SaveLoadState";
import StyledPlain from "./StyledPlainEditor";
import TabIndent from "./TabIndent";
import TextBackgroundToolBar from "./TextBackgroundToolBar";
import TextColorToolbar from "./TextColorToolBar";
import TextFormatToolbar from "./TextFormatToolbar";
import UndoRedo from "./UndoRedo";
import WithDefaultContent from "./WithDefaultContent";
import RichTextWithTreeView from "./WithTreeViewPlugin";

const componentMap: Record<BasicPage, { doc: ReactNode; preview: ReactNode }> =
{
  [BasicPage.UNSTYLED_PLAIN]: {
    doc: <Doc />,
    preview: <PlainStupid />,
  },
  [BasicPage.STYLED_PLAIN]: {
    doc: <NoDocYet />,
    preview: <StyledPlain />,
  },
  [BasicPage.RICH_TEXT]: {
    doc: <NoDocYet />,
    preview: <RichText />,
  },
  [BasicPage.TREE_VIEW]: {
    doc: <NoDocYet />,
    preview: <RichTextWithTreeView />,
  },
  [BasicPage.TEXT_FORMAT_TOOLBAR]: {
    doc: <NoDocYet />,
    preview: <TextFormatToolbar />,
  },
  [BasicPage.ALIGNMENT]: {
    doc: <NoDocYet />,
    preview: <AlignFormatToolbarPlugin />,
  },
  [BasicPage.SAVE_LOAD]: {
    doc: <NoDocYet />,
    preview: <SaveLoadState />,
  },
  [BasicPage.WITH_DEFAULT_CONTENT]: {
    doc: <NoDocYet />,
    preview: <WithDefaultContent />,
  },
  [BasicPage.FONT_SIZE]: {
    doc: <NoDocYet />,
    preview: <FontSizesToolBar />
  },
  [BasicPage.FONT_FAMILY]: {
    doc: <NoDocYet />,
    preview: <FontFamilyToolbar />
  },
  [BasicPage.TAB_INDENT]: {
    doc: <NoDocYet />,
    preview: <TabIndent />
  },
  [BasicPage.GET_SELECTION]: {
    doc: undefined,
    preview: undefined
  },
  [BasicPage.MARK_SELECTION]: {
    doc: undefined,
    preview: undefined
  },
  [BasicPage.HASHTAG]: {
    doc: undefined,
    preview: undefined
  },
  [BasicPage.LINK]: {
    doc: undefined,
    preview: undefined
  },
  [BasicPage.HEADERS]: {
    doc: <NoDocYet />,
    preview: <HeadingToolbar />
  },
  [BasicPage.TEXT_COLOR]: {
    doc: <NoDocYet />,
    preview: <TextColorToolbar />
  },
  [BasicPage.TEXT_BACKGROUND_COLOR]: {
    doc: <NoDocYet />,
    preview: <TextBackgroundToolBar />
  },
  [BasicPage.UNDO_REDO]: {
    doc: <NoDocYet />,
    preview: <UndoRedo />
  },
  [BasicPage.HORIZONTAL_RULE]: {
    doc: undefined,
    preview: <HorizontalRule />
  },
  [BasicPage.MARKDOWN]: {
    doc: undefined,
    preview: undefined
  },
  [BasicPage.LIST_WITHOUT_MARKDOWN]: {
    doc: <NoDocYet />,
    preview: <List />
  }
};

export default componentMap;
