import { ImportOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';

interface BtnProps {
  onClick?(): void;
  className?: string;
  style?: any;
}

export default function BtnImport({ onClick, className, style }: BtnProps) {
  const { t } = useTranslation('button');

  return (
    <Button
      onClick={onClick}
      className={`btn-import d-flex align-items-center justify-content-center ${className ? className : ''}`}
      style={style}
      icon={<ImportOutlined />}
    >
      <span style={{ lineHeight: 0, marginLeft: 7 }}>{t('btn.import')}</span>
    </Button>
  );
}
