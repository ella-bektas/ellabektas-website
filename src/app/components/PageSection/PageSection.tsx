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

const paddingTopClass = { s: styles.paddingTopS, m: styles.paddingTopM, l: styles.paddingTopL };
const paddingBottomClass = { s: styles.paddingBottomS, m: styles.paddingBottomM, l: styles.paddingBottomL };

export const PageSection = ({ children, paddingTop, paddingBottom, backgroundColor, direction = 'vertical', align = 'start' }: PageSectionProps) => {
  const ptClass = paddingTop ? paddingTopClass[paddingTop] : '';
  const pbClass = paddingBottom ? paddingBottomClass[paddingBottom] : '';

  return (
    <div className={`${styles.container} ${styles[backgroundColor]}`}>
      <div className={`${styles.content} ${styles[direction]} ${styles[align]} ${ptClass} ${pbClass}`}>{children}</div>
    </div>
  );
};

export default PageSection;