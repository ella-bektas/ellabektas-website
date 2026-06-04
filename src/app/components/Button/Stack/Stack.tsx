'use client'

import styles from "./Stack.module.css";


type StackProps = {
  children?: React.ReactNode;
  gap?: 's' | 'm' | 'l';
  align?: 'start' | 'center' | 'end';
  direction?: 'vertical' | 'horizontal';
}

export const Stack = ({ children, gap = 'm', align = 'start', direction = 'vertical' }: StackProps) => {
  const className = `${styles.stack} ${styles[gap]} ${styles[align]} ${styles[direction]}`;
  return (
    <div className={className}>
      {children}
    </div>
  );
}

export default Stack;