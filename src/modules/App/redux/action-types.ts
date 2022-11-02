export const SET_PAGE_TITLE = 'SET_PAGE_TITLE';

export interface SetPageTitleAction {
  type: typeof SET_PAGE_TITLE;
  payload: string;
}

export type AppActionTypes = SetPageTitleAction;
