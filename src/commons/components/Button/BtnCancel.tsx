import { Button } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';

interface BtnProps {
  onClick?(): void;
  className?: string;
  title?: string;
  disabled?: boolean;
}

export default function BtnCancel({ onClick, className, title, disabled }: BtnProps) {
  const { t } = useTranslation('button');

  return (
    <Button
      disabled={disabled}
      type="default"
      onClick={onClick}
      className={`btn-custom btn-cancel ${className}`}
      size="large"
    >
      {title ? title : t('btn.cancel')}
    </Button>
  );
}
