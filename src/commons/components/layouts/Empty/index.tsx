import '@assets/styles/app.less';
import '@assets/styles/app.scss';

import React from 'react';
import { renderRoutes } from 'react-router-config';
export interface BaseLayoutProps {
  children: React.ReactNode;
}

const EmptyLayout = (props: any) => {

  const { route } = props;
  return <>{renderRoutes(route.routes)}</>;
};
export default EmptyLayout;
