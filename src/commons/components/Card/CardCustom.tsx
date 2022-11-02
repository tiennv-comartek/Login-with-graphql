import { Card } from 'antd';
import React from 'react';
import './index.scss';

export default function CardCustom(props: any) {
  return (
    <Card
      className={`card-custom ${props.className || ''}`}
      title={props?.title}
      bordered={true}
      headStyle={{ borderTop: 0, ...props.headStyle }}
      style={{ border: 0, ...props.style }}
      extra={props?.extra}
      bodyStyle={{ paddingBottom: 0, ...props.bodyStyle }}
      {...props}
    >
      {props.children}
    </Card>
  );
}
