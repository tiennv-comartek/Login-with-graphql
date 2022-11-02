import React from 'react';
import { Modal } from 'antd';
import ButtonCancel from './Button/ButtonCancel';
import ButtonOk from './Button/ButtonOk';
import { useTranslation } from 'react-i18next';

interface Props {
  handleOk: () => void;
  handleCancel: (e: any) => void;
  title?: string;
  content?: any;
  classContent?: string;
  classModalContainer?: string;
  classBtnOk?: string;
  classBtnCancel?: string;
  data?: any;
  isLoading?: boolean;
  okTitle?: string;
  BtnFooter?: any;
}

const ModalCancel = (props: Props) => {
  const { t: btnTran } = useTranslation(['button']);
  return (
    <Modal
      centered
      onCancel={(e) => props.handleCancel(e)}
      className={`modal_confirm_custom ${props.classModalContainer}`}
      visible={!!props.data}
      closable={false}
      footer={null}
    >
      <div className={`content_modal ${props.classContent}`}>
        <div className="title">{props?.title}</div>
        <div className="content mb-4 mt-2">{props?.content}</div>
      </div>
      <div className="d-flex align-items-center justify-content-around btn-modal">
        {props.BtnFooter ? (
          props.BtnFooter
        ) : (
          <>
            <ButtonCancel
              key="cancel"
              title={btnTran('btn.no')}
              classNameBtn={`mr-2 ${props.classBtnCancel}`}
              onClick={(e) => {
                props.handleCancel(e);
              }}
            />
            <ButtonOk
              key="confirm"
              onClick={props.handleOk}
              title={props?.okTitle || btnTran('btn.yes')}
              classNameBtn={`modal-cancel ${props.classBtnOk}`}
              isLoading={props.isLoading}
            />
          </>
        )}
      </div>
    </Modal>
  );
};

export default ModalCancel;
