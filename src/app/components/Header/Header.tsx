"use client";

import Image from "next/image";
import styles from './Header.module.css';
import Tabs from '@/app/components/Tabs/Tabs';
import { TabItemProps } from '@/app/components/TabItem/TabItem';
import Logo from '@/app/components/eblogo.svg';
import Breadcrumb, { BreadcrumbItem } from '@/app/components/Breadcrumb/Breadcrumb';
import { useBreadcrumbs } from '@/app/components/Breadcrumb/BreadcrumbContext';

type HeaderProps = {
  tabs: Omit<TabItemProps, 'isActive'>[];
  breadcrumbs?: BreadcrumbItem[] | null;
};

const Header = ({ tabs, breadcrumbs }: HeaderProps) => {
  const context = useBreadcrumbs();
  const activeBreadcrumbs = breadcrumbs ?? context.breadcrumbs;

  if (activeBreadcrumbs) {
    return (
      <div className={styles.container}>
        <Breadcrumb items={activeBreadcrumbs} />
      </div>
    );
  }

  return (
    <div className={styles.container}>

      <div className={styles.name}>
        <Image src={Logo} alt="Ella Bektas" width={'40'} height={40} />
      </div>

      <Tabs tabs={tabs} />
    </div>
  );
};

export default Header;
