import { EyeOutlined } from '@ant-design/icons';
import { Image } from 'antd';
import React from 'react';
import './index.scss';

interface TableImageI {
  url: string;
  style?: any;
}

export default function TableImage({ url, style }: TableImageI) {
  return (
    <div className="ant-image-custom" style={{ backgroundImage: `url(${url})`, ...style }}>
      <Image
        className="table-item-img"
        src={url}
        height={50}
        width={50}
        preview={{
          mask: <EyeOutlined />,
        }}
      />
    </div>
  );
}
