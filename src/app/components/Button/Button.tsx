'use client'

import { ReactNode } from "react";
import styles from './Button.module.css';
import { Icons, IconName } from "@/app/icons";
import BodyText from "@/app/components/Typography/BodyText";

type ButtonProps = {
  children?: ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'link';
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
      {children && <BodyText as="span" size="m">{children}</BodyText>}
      {RightIcon && <RightIcon className={styles.icon} />}
    </button>
  );
}

