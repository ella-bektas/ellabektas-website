"use client";

import styles from './PageSection.module.css';

type PageSectionProps = {
  title?: string;
  children?: React.ReactNode;
  paddingTop?: 's' | 'm' | 'l';
  paddingBottom?: 's' | 'm' | 'l';
};

export const PageSection = ({ title, children, paddingTop, paddingBottom }: PageSectionProps) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default PageSection;