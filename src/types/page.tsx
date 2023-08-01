export enum BasicPage {
  UNSTYLED_PLAIN = "plain-stupid-editor",
  STYLED_PLAIN = "styled-plain-editor",
  RICH_TEXT = "basic-rich-text",
  TREE_VIEW = "treeview-plugin",
  // TODO
  LOAD_STATE = "load-state",
  GET_SELECTION = "get-selection",
  MARK_SELECTION = "mark-selection",
}

export enum IntermediatePage {
  TEXT_FORMAT_TOOLBAR = "text-format-toolbar",
}

export const basicPageList = Object.values(BasicPage);
