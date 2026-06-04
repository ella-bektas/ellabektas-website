"use client";

import styles from './PageSection.module.css';

type PageSectionProps = {
  children?: React.ReactNode;
  paddingTop?: 's' | 'm' | 'l';
  paddingBottom?: 's' | 'm' | 'l';
  backgroundColor: 'white' | 'grey';
  direction?: 'vertical' | 'horizontal';
};

export const PageSection = ({ children, paddingTop, paddingBottom, backgroundColor, direction = 'vertical' }: PageSectionProps) => {
  return (
    <div className={`${styles.container} ${styles[backgroundColor]}`}>
      <div className={`${styles.content} ${styles[direction]}`}>{children}</div>
    </div>
  );
};

export default PageSection;