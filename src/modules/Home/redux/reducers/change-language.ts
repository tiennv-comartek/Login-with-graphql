import { ChangeLanguageAction, CHANGE_LANGUAGE, typeLanguage } from '../action-types';

export interface ChangeLanguageState {
  loading: boolean;
  data: typeLanguage;
}

export const initialState: ChangeLanguageState = {
  loading: false,
  data: typeLanguage.NOR,
};

export default function (state = initialState, action: ChangeLanguageAction): ChangeLanguageState {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
}
