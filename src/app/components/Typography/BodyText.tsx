import { ReactNode, CSSProperties } from 'react';
import styles from "./Typography.module.css";

interface BodyTextProps {
  size?: string;
  weight?: string;
  as?: 'p' | 'span' | 'div';
  children: ReactNode;
  style?: CSSProperties;
}

export default function BodyText({ size = 'm', weight = 'regular', as: Tag = 'p', children, style }: BodyTextProps) {
  return (
    <Tag className={`${styles[size]} ${styles[weight]}`} style={style}>
      {children}
    </Tag>
  )
}