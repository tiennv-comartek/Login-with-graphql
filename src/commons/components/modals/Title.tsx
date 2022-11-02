import React from 'react';

interface TitleProps {
  title: string;
  className?: string;
}

export default function ModalTitle(props: TitleProps) {
  return <h3 className={`mb-0 ${props?.className}`}>{props.title}</h3>;
}
