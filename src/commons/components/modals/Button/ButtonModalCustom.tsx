import React from 'react';
import { Button } from 'antd';
import './styles.scss';

interface Props {
  title: string;
  classNameBtn?: string;
  onClick: () => void;
  isLoading?: boolean;
  icon?: any;
  bg_color?: string;
}

const ButtonCustomModal = (props: Props) => {
  return (
    <Button
      type="primary"
      className={`btn_custom_modal ${props.classNameBtn}`}
      onClick={props.onClick}
      loading={props.isLoading || false}
      icon={props?.icon || null}
      style={{ backgroundColor: props.bg_color }}
    >
      {props.title.toLocaleUpperCase()}
    </Button>
  );
};

export default ButtonCustomModal;
