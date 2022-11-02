import { SET_PAGE_TITLE } from './action-types';

export const setPageTitle = (payload: string) => {
  return {
    type: SET_PAGE_TITLE,
    payload,
  };
};
