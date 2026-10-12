"use client";

import Link from 'next/link';
import styles from './Breadcrumb.module.css';

export type BreadcrumbItem = {
  label: string;
  href?: string;
  // Element id to scroll to on the destination page, without showing a hash in the URL
  scrollTo?: string;
};

export const SCROLL_TARGET_KEY = 'breadcrumbScrollTarget';

type BreadcrumbProps = {
  items: BreadcrumbItem[];
};

export const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
      <ol className={styles.list}>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={`${item.label}-${index}`} className={styles.item}>
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className={styles.link}
                  onClick={() => item.scrollTo && sessionStorage.setItem(SCROLL_TARGET_KEY, item.scrollTo)}
                >
                  {item.label}
                </Link>
              ) : (
                <span className={styles.current} aria-current={isLast ? 'page' : undefined}>{item.label}</span>
              )}
              {!isLast && <span className={styles.separator} aria-hidden="true">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
