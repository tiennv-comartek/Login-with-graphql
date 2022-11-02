import icon_download from '@assets/icon/icon_download_red.svg';
import React from 'react';
import { useTranslation } from 'react-i18next';

interface BtnProps {
  onClick?(): void;
  className?: string;
  style?: any;
  hideLabel?: boolean;
  refDownloadQrCode?: any;
}

export default function BtnDownloadLink({ onClick, className, style, hideLabel, refDownloadQrCode }: BtnProps) {
  const { t } = useTranslation('button');

  return (
    <a href="/#" className={`btn-custom btn_download_link ${className}`} ref={refDownloadQrCode}>
      <div className="d-flex align-items-center ">
        <img className="mr-2" src={icon_download} width={25} alt="icon" />
        {t('download')}
      </div>
    </a>
  );
}
