import iconEdit from '@assets/icon/icon_edit.svg';
import React from 'react';

interface BtnProps {
  onClick?(): void;
  className?: string;
}

export default function BtnEdit({ onClick, className }: BtnProps) {
  return (
    <div className={`btn-edit-icon ${className}`} onClick={onClick}>
      <img src={iconEdit} width={22} alt="icon delete" />
    </div>
  );
}
