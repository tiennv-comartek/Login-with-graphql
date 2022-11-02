export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';
export const CHANGE_LANGUAGE_SUCCESS = 'CHANGE_LANGUAGE_SUCCESS';
export const CHANGE_LANGUAGE_ERROR = 'CHANGE_LANGUAGE_ERROR';

export enum typeLanguage {
  VI = 'vi',
  EN = 'en',
  NOR = 'no',
}

export interface ChangeLanguageAction {
  type: typeof CHANGE_LANGUAGE;
  payload: typeLanguage;
}

export type ChangeLanguageActionType = ChangeLanguageAction;
