"use client";

import styles from './TabItem.module.css';
import { Icons, IconName } from '@/app/icons';
import Link from 'next/link';
import BodyText from '@/app/components/Typography/BodyText';

export type TabItemProps = {
  title: string;
  href?: string;
  onClick?: () => void;
  isActive: boolean;
  iconLeft?: IconName;
};

const TabItem = ({
  title,
  onClick,
  isActive,
  iconLeft,
  href,
}: TabItemProps) => {

  const LeftIcon = iconLeft ? Icons[iconLeft] : null;


  const tabClassName = isActive ? styles.active : styles.inactive;

  const content = (
    <>
      {LeftIcon && <LeftIcon />}
      <BodyText as="span" size="m">{title}</BodyText>
    </>
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
