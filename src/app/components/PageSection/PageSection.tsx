"use client";

import styles from './PageSection.module.css';

type PageSectionProps = {
  children?: React.ReactNode;
  paddingTop?: 's' | 'm' | 'l';
  paddingBottom?: 's' | 'm' | 'l';
  backgroundColor: 'white' | 'grey';
  direction?: 'vertical' | 'horizontal';
  align?: 'start' | 'center';
};

export const PageSection = ({ children, paddingTop, paddingBottom, backgroundColor, direction = 'vertical', align = 'start' }: PageSectionProps) => {
  return (
    <div className={`${styles.container} ${styles[backgroundColor]}`}>
      <div className={`${styles.content} ${styles[direction]} ${styles[align]}`}>{children}</div>
    </div>
  );
};

export default PageSection;