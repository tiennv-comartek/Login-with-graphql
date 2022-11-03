import React, { useEffect } from 'react';

import { useHistory } from 'react-router';
import useLocalStorage from '../modules/Auth/hooks/useLocalStorage';

const checkLogin = (WrappedComponent: any) => {
 
  // tslint:disable-next-line: only-arrow-functions
  return function (props: any) {
    const { storedValue } = useLocalStorage('token', '');
    const histoty = useHistory();
    useEffect(() => {
      if (!storedValue) {
        histoty.push('/login');
        console.log(2);
      } else {
        histoty.push('/');
        console.log(1);
      }
    }, [storedValue, histoty]);
    return <WrappedComponent {...props} />;
  };
};

export default checkLogin;
