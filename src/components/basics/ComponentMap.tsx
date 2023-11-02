import { type ReactNode } from "react";
import { BasicPage } from "~/types/pageList";
import NoDocYet from "../NoDocYet";
import AlignFormatToolbarPlugin from "./AlignFormatToolbar";
import FontSizesToolBar from "./FontSizesToolBar";
import HeadingToolbar from "./HeadingToolbar";
import PlainStupid from "./PlainStupid";
import Doc from "./PlainStupid/Doc";
import RichText from "./RichText";
import SaveLoadState from "./SaveLoadState";
import StyledPlain from "./StyledPlainEditor";
import TextFormatToolbar from "./TextFormatToolbar";
import WithDefaultContent from "./WithDefaultContent";
import RichTextWithTreeViewPlugin from "./WithTreeViewPlugin";

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
    preview: <RichTextWithTreeViewPlugin />,
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
  [BasicPage.MULTIPLE_FONT]: {
    doc: undefined,
    preview: undefined
  },
  [BasicPage.TAB_INDENT]: {
    doc: undefined,
    preview: undefined
  },
  [BasicPage.HIGHLIGHT]: {
    doc: undefined,
    preview: undefined
  },
  [BasicPage.DIVIDER]: {
    doc: undefined,
    preview: undefined
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
  [BasicPage.LIST]: {
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
  }
};

export default componentMap;
