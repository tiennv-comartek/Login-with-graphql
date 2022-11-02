import React from 'react';

interface Props {
  children: any;
}

const StickyGruopBtn = (props: Props) => {
  return (
    <div>
      <div className="sticky-group-btn">{props.children}</div>
    </div>
  );
};

export default StickyGruopBtn;
