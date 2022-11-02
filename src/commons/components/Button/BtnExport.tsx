import { ExportOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';

interface BtnProps {
  onClick?(): void;
  className?: string;
  style?: any;
}

export default function BtnExport({ onClick, className, style }: BtnProps) {
  const { t } = useTranslation('button');

  return (
    <Button
      onClick={onClick}
      className={`btn-custom btn-export align-items-center justify-content-center ${className ? className : ''}`}
      style={style}
      icon={<ExportOutlined />}
    >
      <span style={{ lineHeight: 0, marginLeft: 7 }}>{t('btn.export')}</span>
    </Button>
  );
}
