import src5 from '@assets/images/login-background-5.jpg';
import styled from 'styled-components';

const LoginFormStyled = {
  Container: styled.div`
    display: flex;
    justify-content: center;
    flex-direction: initial;
    min-height: 100vh;
    //background-image: url(${src5});
    background-size: cover;
    background-position: center;
    background-color: #f3f3f3;
    .login-content {
      position: relative;
      background-color: #fff;
      padding: 2rem;
      min-width: 300px;
      max-width: 550px;
      width: 100%;
      height: 100vh;
      box-shadow: 0 6px 16px -8px rgba(0, 0, 0, 0.08), 0 9px 28px 0 rgba(0, 0, 0, 0.05),
        0 12px 48px 16px rgba(0, 0, 0, 0.03);
    }
    .logo {
      margin-bottom: 2rem;
      text-align: center;
      img {
        max-width: 150px;
      }
    }
    .login-form-forgot {
      // float: right;
    }
    .ant-col-rtl .login-form-forgot {
      float: left;
    }
    .login-form-submit {
      text-align: center;
      margin-bottom: 0.5rem;
    }
    .login-form-button {
      width: 100%;
    }
  `,
};
export default LoginFormStyled;
