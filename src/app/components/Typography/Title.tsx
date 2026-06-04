import { ReactNode } from 'react';
import styles from "./Title.module.css";

interface TitleProps {
  size?: string;
  className?: string;
  children: ReactNode;
}

export default function Title({ size = 'm', className, children }: TitleProps) {
  return (
    <div className={`${styles[size]} ${styles.title} ${className ?? ''}`}>
      {children}
    </div>
  )
}