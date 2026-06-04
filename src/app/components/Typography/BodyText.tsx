import { ReactNode } from 'react';
import styles from "./Typography.module.css";

interface BodyTextProps {
  size?: string;
  weight?: string;
  as?: 'p' | 'span' | 'div';
  children: ReactNode;
}

export default function BodyText({ size = 'm', weight = 'regular', as: Tag = 'p', children }: BodyTextProps) {
  return (
    <Tag className={`${styles[size]} ${styles[weight]}`}>
      {children}
    </Tag>
  )
}