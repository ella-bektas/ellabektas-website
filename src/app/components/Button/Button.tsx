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

export const Button = ({ children, variant = 'primary', onClick, iconLeft, iconRight }: ButtonProps) => {

  const LeftIcon = iconLeft ? Icons[iconLeft] : null;
  const RightIcon = iconRight ? Icons[iconRight] : null;

  const className = styles[variant]; 

  return (
    <button className={className} onClick={onClick}>
      {LeftIcon && <LeftIcon className={styles.icon} />}
      {children}
      {RightIcon && <RightIcon className={styles.icon} />}
    </button>
  );
}

