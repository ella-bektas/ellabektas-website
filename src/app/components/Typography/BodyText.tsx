import { ReactNode } from 'react';
import styles from "./Typography.module.css";

interface BodyTextProps {
  size?: string;
  weight?: string;
  children: ReactNode;
}

export default function BodyText({ size = 'm', weight = 'regular', children }: BodyTextProps) {
  return (
    <p className={`${styles[size]} ${styles[weight]}`}>
      {children}
    </p>
  )
}