import React from 'react';
import './index.scss';

interface FormContentLayoutI {
  className?: string;
  style?: any;
  action?: any;
  children?: any;
}

const FormContentLayout = (props: FormContentLayoutI) => {
  return (
    <div className={`form-content-layout ${props?.className} px-0`} style={{ ...props?.style }}>
      <div className="bg-primary-color">
        {props?.children}
        <div className={props?.action ? 'action-sticky' : 'd-none'}>{props?.action}</div>
      </div>
    </div>
  );
};

export default React.memo(FormContentLayout);
