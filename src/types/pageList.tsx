export enum BasicPage {
  UNSTYLED_PLAIN = "plain-stupid-editor",
  STYLED_PLAIN = "styled-plain-editor",
  RICH_TEXT = "basic-rich-text",
  TREE_VIEW = "treeview-plugin",
  WITH_DEFAULT_CONTENT = "with-default-content",
  SAVE_LOAD = "save-load-state",
  TEXT_FORMAT_TOOLBAR = "text-format-toolbar",
  ALIGNMENT = "align-format-toolbar",
  HEADERS = "headings-toolbar",
  FONT_SIZE = "font-sizes-toolbar",
  FONT_FAMILY = "font-family-toolbar",
  TEXT_COLOR = "text-color-toolbar",
  TEXT_BACKGROUND_COLOR = "text-background-toolbar",
  UNDO_REDO = "undo-redo",
  HORIZONTAL_RULE = "horizontal-rule-node",
  TAB_INDENT = "tab-indent",
  // TODO
  LIST_WITHOUT_MARKDOWN = "list-without-markdown",
  MARKDOWN = "markdown",
  LINK = "link",
  HASHTAG = "hashtag",
  GET_SELECTION = "get-selection",
  MARK_SELECTION = "mark-selection",
}

export enum IntermediatePage {
  ADD_TEXT_PROGRAMMATICALLY = "add-text-programmatically",
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

export enum Difficulties {
  BASICS = "BASICS",
  INTERMEDIATE = "INTERMEDIATE",
  ADVANCED = "ADVANCED",
}

export const difficultiesList = Object.values(Difficulties);
