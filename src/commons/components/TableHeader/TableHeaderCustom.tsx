import React from 'react';

export default function TableHeaderCustom(props: any) {
  return <div className={`${props?.className ? props?.className : ''} table-header-style`}>{props.children}</div>;
}
