import { ReactNode, CSSProperties } from 'react';
import styles from "./Title.module.css";

interface TitleProps {
  size?: string;
  className?: string;
  align?: 'left' | 'center' | 'right';
  style?: CSSProperties;
  children: ReactNode;
}

export default function Title({ size = 'm', className, align = 'left', style, children }: TitleProps) {
  return (
    <div className={`${styles[size]} ${styles.title} ${className ?? ''}`} style={{ textAlign: align, ...style }}>
      {children}
    </div>
  )
}