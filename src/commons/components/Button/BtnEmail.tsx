import iconEmail from '@assets/icon/icon_email_green.svg';
import React from 'react';
import { useTranslation } from 'react-i18next';

interface BtnProps {
  onClick?(event: any): void;
  type?: 'vertical' | 'horizontal';
}

export default function BtnEmail({ onClick, type }: BtnProps) {
  const { t } = useTranslation('button');
  return (
    <div
      className={`btn-custom ${
        type === 'vertical' ? 'flex-column' : ''
      } d-flex fs-16 w-max-content justify-content-between align-items-center cursor-pointer mr-4 hover-opacity`}
      onClick={onClick}
    >
      <img src={iconEmail} width={22} alt="icon edit" className={`${type === 'vertical' ? '' : 'mr-2'}`} />
      <span className="mt-1 color-green font-medium" style={{ fontWeight: 500, width: 'max-content' }}>
        {t('email')}
      </span>
    </div>
  );
}
