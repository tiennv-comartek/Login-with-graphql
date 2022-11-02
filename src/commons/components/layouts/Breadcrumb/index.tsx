import breadcrumbsRoutes from '@/breadcrumbs';
import { Breadcrumb } from 'antd';
import React from 'react';
import useBreadcrumbs from 'use-react-router-breadcrumbs';

const Breadcrumbs = (props: any) => {
  const breadcrumbs = useBreadcrumbs(breadcrumbsRoutes);
  return (
    <Breadcrumb className="manual-breadcrumb">
      {breadcrumbs.map(({ breadcrumb }: any, index: number) => {
        return <Breadcrumb.Item key={index}>{breadcrumb}</Breadcrumb.Item>;
      })}
    </Breadcrumb>
  );
};

export default Breadcrumbs;
