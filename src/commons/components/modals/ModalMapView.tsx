import { Modal } from 'antd';
import React from 'react';
import icon_close from '@assets/icon/icon_close_gray.svg';

export const GOOGLE_MAP_API_KEY = process.env.REACT_APP_GOOGLE_MAP_API_KEY;

export interface LocationInput {
  name?: string;
  lat?: number;
  lng?: number;
}

interface Props {
  data?: LocationInput;
  visible: boolean;
  onCancel: () => void;
}

const ModalMapView = (props: Props) => {
  return (
    <Modal
      centered
      visible={props.visible}
      footer={null}
      closeIcon={null}
      closable={false}
      onCancel={props.onCancel}
      className="modal_map_view"
    >
      <div className="container_view">
        <div className="btn-close" onClick={props.onCancel}>
          <img src={icon_close} alt="ic_close" width={14} height={14} />
        </div>
        {props.data ? (
          <iframe
            style={{ width: '100%', height: '100%' }}
            loading="lazy"
            src={`https://www.google.com/maps/embed/v1/place?key=${GOOGLE_MAP_API_KEY}&q=${props.data.lat},${props.data.lng}`}
            title="map view"
          />
        ) : (
          <></>
        )}
      </div>
    </Modal>
  );
};

export default ModalMapView;
