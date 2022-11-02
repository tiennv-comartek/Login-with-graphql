import { Button } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';

interface BtnProps {
  onReset?(): void;
  className?: string;
}

function BtnReset({ onReset, className }: BtnProps) {
  const { t } = useTranslation('button');
  return (
    <Button type="default" onClick={onReset} className={`btn-reset ${className}`} size="large">
      {t('btn.reset')}
    </Button>
  );
}

export default BtnReset;
