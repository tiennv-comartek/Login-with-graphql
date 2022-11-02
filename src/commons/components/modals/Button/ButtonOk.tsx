import React from 'react';
import { Button } from 'antd';
import './styles.scss';
import { useTranslation } from 'react-i18next';

interface Props {
  title?: string;
  classNameBtn?: string;
  onClick: () => void;
  isLoading?: boolean;
  icon?: any;
  disabled?: boolean;
}

const ButtonOk = (props: Props) => {
  const { t } = useTranslation(['button']);

  return (
    <Button
      type="primary"
      className={`btn_ok_modal ${props.classNameBtn}`}
      onClick={props.onClick}
      loading={props.isLoading || false}
      icon={props?.icon || null}
      disabled={props.disabled || false}
    >
      {props.title ? props.title : t('confirm')}
    </Button>
  );
};

export default ButtonOk;
