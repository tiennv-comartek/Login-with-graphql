import { setTitle } from '@helpers/dom';
import React, { useEffect } from 'react';

import LoginForm from './components/Form/Login';

function LoginPage() {
  useEffect(() => {
    setTitle('Đăng Nhập');
  }, []);

  return (
    <>
      <LoginForm />
    </>
  );
}

export default LoginPage;
