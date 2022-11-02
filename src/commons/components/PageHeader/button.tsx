import React from 'react';

export default function HeaderButton(props: any) {
  return <div className={`text-right bdb-2 pb-3 mb-3 ${props.className || ''}`}>{props.children}</div>;
}
