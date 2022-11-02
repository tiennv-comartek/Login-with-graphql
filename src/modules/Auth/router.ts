import { CommonPath } from '@commons/base-routes';
import LoginPage from '@modules/Auth/pages/Login';
import checkLogin from '../../hoc/checkLogin';

export const AuthRouter = {
  path: CommonPath.LOGIN_PATH,
  exact: true,
  component: checkLogin(LoginPage),
};
