import { ReactNode } from 'react';
import styles from "./Title.module.css";

interface TitleProps {
  size?: string;
  children: ReactNode;
}

export default function Title({ size = 'm', children }: TitleProps) {
  return (
    <div className={`${styles[size]} ${styles.title}`}>
      {children}
    </div>
  )
}