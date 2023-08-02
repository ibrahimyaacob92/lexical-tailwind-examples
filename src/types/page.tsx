export enum BasicPage {
  UNSTYLED_PLAIN = "plain-stupid-editor",
  STYLED_PLAIN = "styled-plain-editor",
  RICH_TEXT = "basic-rich-text",
  TREE_VIEW = "treeview-plugin",
  // TODO
  TEXT_FORMAT_TOOLBAR = "text-format-toolbar",
  LOAD_STATE = "load-state",
  ALIGNMENT = "align",
  FONT_SIZE = "font-size",
  HIGHLIGHT = "highlight-text-color",
  TAB_INDENT = "tab-indent",
  GET_SELECTION = "get-selection",
  MARK_SELECTION = "mark-selection",
  HASHTAG = "hashtag",
  LIST = "list",
  LINK = "link",
}

export enum IntermediatePage {
  MARKDOWN = "markdown",
  BASIC_IMAGE = "basic-image",
  BASIC_TABLE = "basic-table",
  MENTION = "mention",
  YOUTUBE = "youtube",
  IFRAME = "iframe",
  CHECKBOX = "checkbox",
  DIFF = "diff",
}

export enum AdvancedPage {
  RESIZABLE_IMAGE = "text-format-toolbar",
  IN_LINE_COMMENT = "in-line-comment",
  WHITE_BOARD = "white-board",
}

export const basicPageList = Object.values(BasicPage);
export const intermediatePageList = Object.values(IntermediatePage);
export const advancedPageList = Object.values(AdvancedPage);
