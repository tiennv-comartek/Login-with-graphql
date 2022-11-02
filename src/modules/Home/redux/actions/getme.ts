import { User } from '@/graphql/generated/graphql';
import { AppError } from '@commons/types';
import { GetMeAction, GetMeActionTypes, GET_ME, GET_ME_ERROR, GET_ME_SUCCESS } from '../action-types';

export const getMeAction = (): GetMeAction => ({
  type: GET_ME,
});

export const GetMeError = (payload: AppError): GetMeActionTypes => ({
  type: GET_ME_ERROR,
  payload,
});

export const GetMeSuccess = (payload: User | null): GetMeActionTypes => ({
  type: GET_ME_SUCCESS,
  payload,
});

// export interface LoginSuccessAction extends ActionBase<LoginResponse> { }
// export const loginSuccess = (payload: LoginResponse): LoginSuccessAction => ({
//   type: typeof LOGIN_SUCCESS,
//   payload,
// });
