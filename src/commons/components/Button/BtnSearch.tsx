import { SearchOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';

interface BtnProps {
  onClick?(): void;
  title: string;
  className?: string;
  style?: any;
  loading?: boolean;
}

export default function BtnSearch({ onClick, title, className, style, loading }: BtnProps) {
  return (
    <Button
      onClick={onClick}
      className={`btn-custom btn-search ${className ? className : ''}`}
      style={style}
      loading={loading}
    >
      <SearchOutlined style={{ marginRight: 4, transform: 'scale(130%)' }} />
      {title}
    </Button>
  );
}
