import { type ReactNode } from "react";
import { BasicPage } from "~/types/page";
import AlignFormatToolbarPlugin from "./AlignFormatToolbar";
import PlainStupid from "./PlainStupid";
import Doc from "./PlainStupid/Doc";
import RichText from "./RichText";
import SaveLoadState from "./SaveLoadState";
import StyledPlain from "./StyledPlainEditor";
import TextFormatToolbar from "./TextFormatToolbar";
import RichTextWithTreeViewPlugin from "./WithTreeViewPlugin";

const componentMap: Record<BasicPage, { doc: ReactNode; preview: ReactNode }> =
  {
    [BasicPage.UNSTYLED_PLAIN]: {
      doc: <Doc />,
      preview: <PlainStupid />,
    },
    [BasicPage.STYLED_PLAIN]: {
      doc: <Doc />,
      preview: <StyledPlain />,
    },
    [BasicPage.RICH_TEXT]: {
      doc: <Doc />,
      preview: <RichText />,
    },
    [BasicPage.TREE_VIEW]: {
      doc: <Doc />,
      preview: <RichTextWithTreeViewPlugin />,
    },
    [BasicPage.TEXT_FORMAT_TOOLBAR]: {
      doc: <Doc />,
      preview: <TextFormatToolbar />,
    },
    [BasicPage.ALIGNMENT]: {
      doc: <Doc />,
      preview: <AlignFormatToolbarPlugin />,
    },
    [BasicPage.SAVE_LOAD]: {
      doc: <Doc />,
      preview: <SaveLoadState />,
    },
  };

export default componentMap;
