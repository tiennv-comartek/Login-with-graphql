import iconEye from '@assets/icon/previewIcon.svg';
import React from 'react';

interface BtnProps {
  onClick?(): void;
  className?: string;
}

export default function BtnPreview({ onClick, className }: BtnProps) {
  return (
    <div className={`btn-preview-icon mr-2 ${className}`} onClick={onClick}>
      <img src={iconEye} width={22} alt="icon preview" />
    </div>
  );
}
