"use client";

import Image from "next/image";
import styles from './Header.module.css';
import Tabs from '@/app/components/Tabs/Tabs';
import { TabItemProps } from '@/app/components/TabItem/TabItem';
import Logo from '@/app/components/eblogo.svg';

type HeaderProps = {
  tabs: Omit<TabItemProps, 'isActive'>[];
};

const Header = ({ tabs }: HeaderProps) => {
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
