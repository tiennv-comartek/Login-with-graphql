import { Button } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';

interface BtnProps {
  onClick?(): void;
  title?: string;
  className?: string;
  style?: any;
  loading?: boolean;
}

export default function BtnSubmit({ onClick, title, className, style, loading }: BtnProps) {
  const { t } = useTranslation('button');
  return (
    <Button
      onClick={onClick}
      className={`btn-custom btn-submit ${className ? className : ''}`}
      style={style}
      type="primary"
      loading={loading}
    >
      {title ? title : t('submit')}
    </Button>
  );
}
