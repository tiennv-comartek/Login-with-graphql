import React from 'react';

interface IconProps {
  icon: string;
  name?: string;
}
export default function MenuIcon({ icon, name }: IconProps) {
  return <img src={icon} alt={name ? name : 'menu-icon'} className="menu-icon" />;
}
