import { LoginInput } from '@/graphql/generated/graphql';
import { getSDK } from '@services/graphql-client';
import { notification } from 'antd';
import { useCallback } from 'react';
import { useHistory } from 'react-router';

function useLogin() {
  const histoty = useHistory();

  const onLogin = useCallback((loginInput: LoginInput) => {
    const sdk = getSDK();
    const login = sdk.acclogin({ loginInput });
    login
      .then((result) => {
        notification.open({
          message: 'Đăng nhập thành công...',
        });
        localStorage.setItem('token', JSON.stringify(result.signIn));
        histoty.push('/home');
      })
      .catch(() => {
        notification.open({
          message: 'Tài khoản hoặc mật khẩu ko đúng',
        });
        localStorage.setItem('token', JSON.stringify(null));
      });

    // eslint-disable-next-line
  }, []);

  return {
    onLogin,
  };
}

export default useLogin;
