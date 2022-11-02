import { CommonPath } from '@commons/base-routes';
import LoginPage from '@modules/Auth/pages/Login';

export const AuthRouter = {
  path: CommonPath.LOGIN_PATH,
  exact: true,
  component: LoginPage,
};
