import { DeleteOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';

interface Props {
  className?: string;
  style?: any;
  onClick: (value: any) => void;
  disabled?: boolean;
}

export default function BtnDelete2({ className, style, onClick, disabled }: Props) {
  const { t } = useTranslation('button');
  return (
    <Button
      type="default"
      className={`btn-delete2 shadow-none text-right border-0 bg-transparent m-0 ${className}`}
      onClick={onClick}
      icon={<DeleteOutlined />}
      style={{
        minWidth: 'auto',
        width: 'fit-content',
        ...style,
      }}
      disabled={disabled}
    >
      {t('btn.delete')}
    </Button>
  );
}
