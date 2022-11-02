import '@assets/styles/app.less';
import '@assets/styles/app.scss';
import { CommonPath } from '@commons/base-routes';
import { setHistory } from '@helpers/history';

import { appStart } from '@redux/actions';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { renderRoutes } from 'react-router-config';
import { useLocation } from 'react-router-dom';
export interface BaseLayoutProps {
  children: React.ReactNode;
}

const EmptyLayout = (props: any) => {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    setHistory(history);
    dispatch(appStart());
    if (!location.pathname.includes(CommonPath.CLOUDPOS_VIEW_PATH)) {
      history.replace('/login');
    }

    // eslint-disable-next-linegetAuthLocalData
    // eslint-disable-next-line
  }, []);
  const { route } = props;
  return <>{renderRoutes(route.routes)}</>;
};
export default EmptyLayout;
