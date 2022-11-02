/**
 * hoc component hỗ trợ router
 * các route khi được bọc bởi component này sẽ được kiểm tra đã đăng nhập chưa
 * nếu chưa đăng nhập sẽ đưa ra trang đăng nhập và lưu lại redirect url
 */
// import { UserType } from '@/graphql/generated/graphql';
import { CommonPath } from '@commons/base-routes';
import Loading from '@commons/components/Loading';
import { setRedirectUrl } from '@helpers/history';

import { RootState } from '@redux/reducers';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

export function protectedComponent(WrappedComponent: any) {
  // tslint:disable-next-line: only-arrow-functions
  return function (props: any) {
    const history = useHistory();

    useEffect(() => {
      setRedirectUrl(window.location.href);
    }, []);

    return <WrappedComponent {...props} />;
  };
}
