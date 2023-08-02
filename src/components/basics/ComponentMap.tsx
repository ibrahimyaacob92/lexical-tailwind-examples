import { BasicPage } from "~/types/page";
import PlainStupid from "./PlainStupid";
import Doc from "./PlainStupid/Doc";
import RichText from "./RichText";
import StyledPlain from "./StyledPlainEditor";
import RichTextWithTreeViewPlugin from "./WithTreeViewPlugin";

const componentMap = {
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
  [BasicPage.LOAD_STATE]: {
    doc: <Doc />,
    preview: <PlainStupid />,
  },
};

export default componentMap;
