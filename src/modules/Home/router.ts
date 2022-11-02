import { CommonPath } from '@commons/base-routes';
import HomePage from './pages/Home';

export const HomeRouter = {
  path: CommonPath.HOME_PATH,
  exact: true,
  component: HomePage,
};
