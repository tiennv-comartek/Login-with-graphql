import { Card } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import './index.scss';

export default function CardContainer(props: any) {
  const ref: any = useRef();
  const [cardCustomSize, setCardCustomSize] = useState({
    with: 0,
    height: 0,
  });

  useEffect(() => {
    if (ref) {
      setCardCustomSize({
        height: ref?.current?.clientHeight,
        with: ref?.current?.clientWidth,
      });
    }
  }, [ref]);

  return (
    <Card
      className={`card-container bg-primary-cms ${props.classNameContainer || ''} ${
        ref?.current?.clientHeight > 825 ? 'fixed' : ''
      }`}
      title={props?.title}
      bordered={true}
      headStyle={{ borderTop: 0, textTransform: 'uppercase', ...props.headStyle }}
      style={{ border: 0, ...props.style }}
      extra={props?.extra}
      bodyStyle={{ paddingBottom: 0, overflow: 'hidden', ...props.bodyStyle }}
    >
      <div ref={ref} className="position-relative">
        {props?.children}
        {props?.cardAction && (
          <div
            className={`d-flex align-items-center justify-content-end card-footer-action ${
              cardCustomSize.height > 825 ? 'fixed' : ''
            }`}
            style={{ width: cardCustomSize.with + 48 }}
          >
            {props?.cardAction}
          </div>
        )}
      </div>
    </Card>
  );
}
