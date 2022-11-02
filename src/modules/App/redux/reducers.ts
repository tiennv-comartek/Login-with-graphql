import { AppActionTypes, SET_PAGE_TITLE } from './action-types';

export interface AppState {
  loaded: boolean;
  title: string;
}

const initialState = {
  loaded: false,
  title: '',
};

export default (state = initialState, action: AppActionTypes): AppState => {
  switch (action.type) {
    case SET_PAGE_TITLE:
      return {
        ...state,
        title: action.payload,
      };
    default:
      return state;
  }
};
