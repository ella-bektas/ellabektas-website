"use client";

import styles from './PageSection.module.css';

type PageSectionProps = {
  children?: React.ReactNode;
  paddingTop?: 's' | 'm' | 'l';
  paddingBottom?: 's' | 'm' | 'l';
  backgroundColor: 'white' | 'grey';
  direction?: 'vertical' | 'horizontal';
};

export const PageSection = ({ children, paddingTop, paddingBottom, backgroundColor, direction }: PageSectionProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default PageSection;