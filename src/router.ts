import EmptyLayout from '@commons/components/layouts/Empty';
import { AuthRouter } from '@modules/Auth/router';
import { HomeRouter } from '@modules/Home/router';
import { RouteConfig } from 'react-router-config';

const routes: RouteConfig[] = [
  {
    component: EmptyLayout,
    routes: [
      AuthRouter,
      {
        ...HomeRouter,
      },
    ],
  },
];

export default routes;
