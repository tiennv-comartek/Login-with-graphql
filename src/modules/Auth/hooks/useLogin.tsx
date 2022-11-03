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
        histoty.push('/');
      })
      .catch(() => {
        notification.open({
          message: 'Tài khoản hoặc mật khẩu ko đúng',
        });
        localStorage.setItem('token', JSON.stringify(null));
      });
    // if (
    //   (loginInput.email === 'ngocxinxu@gmail.com' && loginInput.password === '123') ||
    //   (loginInput.email === 'karik@gmail.com' && loginInput.password === 'lll')
    // ) {
    //   notification.open({
    //     message: 'Đăng nhập thành công...',
    //   });
    //   localStorage.setItem('my_login', JSON.stringify(loginInput.email));
    //   // storing input name
    //   histoty.push('/');
    // } else {
    //   notification.open({
    //     message: 'Tên tài khoản hoặc mật khẩu không đúng!',
    //   });
    
    // }

    // eslint-disable-next-line
  }, []);

  return {
    onLogin,
  };
}

export default useLogin;
