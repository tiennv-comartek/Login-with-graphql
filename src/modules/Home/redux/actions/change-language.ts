import { ChangeLanguageActionType, CHANGE_LANGUAGE, typeLanguage } from '../action-types';

export const changeLanguageAction = (payload: typeLanguage): ChangeLanguageActionType => ({
  type: CHANGE_LANGUAGE,
  payload,
});
