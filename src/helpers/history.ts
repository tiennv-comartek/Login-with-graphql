import { History } from 'history';

let _history: History | any;
let _redirectUrl: string;

export const setHistory = (history: History) => {
  _history = history;
};

export const getHistory = () => {
  return _history;
};

export const goBackHistory = () => {
  return _history.goBack();
};

export const setRedirectUrl = (url: string) => {
  _redirectUrl = url;
};

export const getRedirectUrl = () => {
  return _redirectUrl;
};
