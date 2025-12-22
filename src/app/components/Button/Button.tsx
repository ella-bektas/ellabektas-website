'use client'

import React, { ReactNode } from "react";
import styles from './Button.module.css';
import { Icons, IconName } from "@/app/icons";

type ButtonProps = {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary';
  onClick?: () => void;
  iconLeft?: IconName; 
  iconRight?: IconName;
}

export const Button = ({ children, variant = 'primary', onClick, iconLeft }: ButtonProps) => {

  const IconComponent = iconLeft ? Icons[iconLeft] : null;

  const className = styles[variant]; 

  return (
    <button className={className} onClick={onClick}>
      {IconComponent && <IconComponent className={styles.icon} />}
      {children}
    </button>
  );
}
