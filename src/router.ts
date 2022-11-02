import EmptyLayout from '@commons/components/layouts/Empty';
import MasterLayout from '@commons/components/layouts/MasterLayout';
import checkLogin from '@modules/Auth/hoc/checkLogin';
import { AuthRouter } from '@modules/Auth/router';
import { HomeRouter } from '@modules/Home/router';
import { RouteConfig } from 'react-router-config';

const routes: RouteConfig[] = [
  {
    component: EmptyLayout,
    routes: [
      AuthRouter,
      {
        component: checkLogin(MasterLayout),
        path: '/',
        routes: [HomeRouter],
      },
    ],
  },
];

export default routes;
