import iconShare from '@/assets/icon/icon-share.svg';
import { Button } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';

interface BtnProps {
  onClick?(): void;
  type?: 'vertical' | 'horizontal';
}

export default function BtnShareIcon({ onClick }: BtnProps) {
  const { t } = useTranslation('button');
  return (
    <Button
      icon={<img src={iconShare} width={22} alt="icon edit" className="mr-2 mb-1" />}
      type="primary"
      className="d-flex w-max-content align-items-center justify-content-center"
      onClick={onClick}
    >
      <span className="font-bold fs-20">{t('share')}</span>
    </Button>
  );
}
