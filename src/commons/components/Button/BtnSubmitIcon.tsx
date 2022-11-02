import iconSave from '@assets/icon/save.svg';
import React from 'react';
import { useTranslation } from 'react-i18next';

interface BtnProps {
  onClick?(): void;
  type?: 'vertical' | 'horizontal';
  loading?: boolean;
}

export default function BtnSubmitIcon({ onClick, type }: BtnProps) {
  const { t } = useTranslation('button');
  return (
    <div
      className={`${
        type === 'vertical' ? 'flex-column' : ''
      } d-flex fs-16 w-max-content justify-content-between align-items-center cursor-pointer mr-4 hover-opacity`}
      onClick={onClick}
    >
      <img src={iconSave} width={22} alt="icon edit" className={`${type === 'vertical' ? '' : 'mr-2'}`} />
      <span className="mt-1 color-green font-medium" style={{ fontWeight: 500 }}>
        {t('save')}
      </span>
    </div>
  );
}
