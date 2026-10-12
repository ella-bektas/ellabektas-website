"use client";

import styles from './TabItem.module.css';
import Link from 'next/link';
import BodyText from '@/app/components/Typography/BodyText';

export type TabItemProps = {
  title: string;
  href?: string;
  onClick?: () => void;
  isActive: boolean;
};

const TabItem = ({
  title,
  onClick,
  isActive,
  href,
}: TabItemProps) => {


  const tabClassName = isActive ? styles.active : styles.inactive;

  const content = (
    <span className={styles.textWrapper}>
      <BodyText as="span" size="m">{title}</BodyText>
    </span>
  );

  
  if (href) {
    return (
      <Link
        href={href}
        className={tabClassName}
        aria-current={isActive ? 'page' : undefined}
      >
        {content}
      </Link>
    );
  }

  //
  return (
    <button
      onClick={onClick}
      className={tabClassName}
      type="button"
    >
      {content}
    </button>
  );
};

export default TabItem;
