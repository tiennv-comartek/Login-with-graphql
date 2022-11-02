import { User } from '@/graphql/generated/graphql';
import { GetMeActionTypes, GET_ME, GET_ME_ERROR, GET_ME_SUCCESS } from '../action-types';

interface StateInfo {
  userInfo: User | null;
  loading: boolean;
}

const initialState: StateInfo = {
  userInfo: null,
  loading: false,
};

export const getMeReducers = (state = initialState, action: GetMeActionTypes): StateInfo => {
  switch (action.type) {
    case GET_ME:
      return {
        ...state,
        loading: true,
      };
    case GET_ME_SUCCESS:
      return {
        ...state,
        loading: false,
        userInfo: action.payload,
      };
    case GET_ME_ERROR:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};
