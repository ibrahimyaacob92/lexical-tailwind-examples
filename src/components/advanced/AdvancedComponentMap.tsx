import { AdvancedPage, type PageContent } from "~/types/pageList";

const AdvancedComponentMap: Record<AdvancedPage, PageContent> = {
  [AdvancedPage.RESIZABLE_IMAGE]: {
    doc: undefined,
    preview: undefined,
  },
  [AdvancedPage.IN_LINE_COMMENT]: {
    doc: undefined,
    preview: undefined,
  },
  [AdvancedPage.WHITE_BOARD]: {
    doc: undefined,
    preview: undefined,
  },
};

export default AdvancedComponentMap;
