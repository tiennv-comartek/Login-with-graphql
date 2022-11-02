import React from 'react';
import { Button } from 'antd';
import './styles.scss';
import { useTranslation } from 'react-i18next';

interface Props {
  title?: string;
  classNameBtn?: string;
  onClick: (e: any) => void;
}

const ButtonCancel = (props: Props) => {
  const { t } = useTranslation(['button']);

  return (
    <Button className={`btn_cancel_modal ${props.classNameBtn}`} onClick={props.onClick}>
      {props.title ? props.title.toLocaleUpperCase() : t('btn.cancel')}
    </Button>
  );
};

export default ButtonCancel;
