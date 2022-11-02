import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';

interface BtnProps {
  onClick?(): void;
  className?: string;
  title?: string;
  icon?: any;
  style?: any;
}

export default function BtnAddNewIcon({ onClick, className, title }: BtnProps) {
  const { t } = useTranslation('button');
  return (
    <Button
      type="primary"
      onClick={onClick}
      className={`btn-custom btn-add-new ${className}`}
      size="large"
      icon={<PlusOutlined style={{ marginRight: 5 }} />}
    >
      {title ? title : t('add')}
    </Button>
  );
}
