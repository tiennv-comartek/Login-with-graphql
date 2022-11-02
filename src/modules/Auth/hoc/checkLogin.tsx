import React, { useEffect } from 'react';

import { useHistory } from 'react-router';
import useLocalStorage from '../hooks/useLocalStorage';

const checkLogin = (WrappedComponent: any) => {
  // tslint:disable-next-line: only-arrow-functions
  return function (props: any) {
    const { storedValue } = useLocalStorage('my_login', '');
    const histoty = useHistory();
    useEffect(() => {
      if (!storedValue) {
        histoty.push('/login');
      } else {
        histoty.push('/');
      }
      // eslint-disable-next-line
    }, [storedValue]);
    return <WrappedComponent {...props} />;
  };
};

export default checkLogin;
