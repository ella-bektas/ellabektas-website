import { ReactNode } from 'react';
import styles from "./Title.module.css";

interface TitleProps {
  size?: string;
  children: ReactNode;
}

export default function Title({ size = 'm', children }: TitleProps) {
  return (
    <p className={`${styles[size]} ${styles.title}`}>
      {children}
    </p>
  )
}