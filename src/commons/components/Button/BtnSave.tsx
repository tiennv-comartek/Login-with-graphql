import { Button } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';

interface BtnProps {
  onSave?(): void;
  className?: string;
  disable?: boolean;
  title?: string;
}

export default function BtnSave({ onSave, className, disable, title }: BtnProps) {
  const { t } = useTranslation('button');

  return (
    <Button
      type="default"
      onClick={onSave}
      className={`btn-custom btn-save ${className} ${disable ? 'disable' : ''}`}
      size="large"
    >
      {title ? title : t('btn.save')}
    </Button>
  );
}
