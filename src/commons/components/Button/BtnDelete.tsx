import iconDelete from '@assets/icon/icon_delete.svg';
import React from 'react';

interface BtnProps {
  onDelete?(): void;
  className?: string;
}

export default function BtnDelete1({ onDelete, className }: BtnProps) {
  return (
    <div className={`btn-delete-icon ${className}`} onClick={onDelete}>
      <img src={iconDelete} width={22} alt="icon delete" />
    </div>
  );
}
