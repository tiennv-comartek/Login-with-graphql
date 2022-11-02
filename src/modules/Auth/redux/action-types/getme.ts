import { User } from '@/graphql/generated/graphql';
import { AppError } from '@commons/types';

export const GET_ME = 'GET_ME';
export const GET_ME_SUCCESS = 'GET_ME_SUCCESS';
export const GET_ME_ERROR = 'GET_ME_ERROR';

export interface GetMeState {
  loading: boolean;
  userInfo: User | null;
}

export interface GetMeAction {
  type: typeof GET_ME;
}

export interface GetMeActionSuccess {
  type: typeof GET_ME_SUCCESS;
  payload: User | null;
}

export interface GetMeActionError {
  type: typeof GET_ME_ERROR;
  payload: AppError;
}

export type GetMeActionTypes = GetMeAction | GetMeActionSuccess | GetMeActionError;
