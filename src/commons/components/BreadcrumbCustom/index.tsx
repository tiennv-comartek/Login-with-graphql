import { Breadcrumb } from 'antd';
import { Route } from 'antd/lib/breadcrumb/Breadcrumb';
import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  routers: Route[];
  className?: string;
}

const BreadcrumbCustom = (props: Props) => {
  return (
    <Breadcrumb className={`bread_cum_custom pt-0 pl-0 pr-0 pb-4 ${props.className || ''}`}>
      {props.routers.map((item, index) => {
        return (
          <Breadcrumb.Item key={index}>
            <Link to={item.path}>{item.breadcrumbName}</Link>
          </Breadcrumb.Item>
        );
      })}
    </Breadcrumb>
  );
};

export default BreadcrumbCustom;
