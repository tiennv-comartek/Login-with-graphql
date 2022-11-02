import { Button } from 'antd';
import React from 'react';

interface BtnProps {
  onClick?(): void;
  title: string;
  className?: string;
  style?: any;
}

export default function BtnAddTable({ onClick, title, className, style }: BtnProps) {
  return (
    <Button onClick={onClick} className={`btn-custom btn-table-add ${className ? className : ''}`} style={style}>
      {title}
    </Button>
  );
}
