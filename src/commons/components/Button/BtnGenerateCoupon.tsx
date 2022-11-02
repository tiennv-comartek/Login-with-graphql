import { AppstoreAddOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';

interface BtnProps {
  onClick?(): void;
  className?: string;
  title?: string;
}

export default function BtnGenerateCoupon({ onClick, className, title }: BtnProps) {
  const { t } = useTranslation('button');
  return (
    <Button
      onClick={onClick}
      className={`btn-custom btn-gen-coupon ${className}`}
      size="large"
      icon={<AppstoreAddOutlined style={{ marginRight: 5 }} />}
    >
      {title ? title : t('add')}
    </Button>
  );
}
