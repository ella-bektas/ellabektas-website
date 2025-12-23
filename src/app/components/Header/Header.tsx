"use client";

import React from "react";
import Image from "next/image";
import styles from './Header.module.css';
import Tabs from '@/app/components/Tabs/Tabs';
import { TabItemProps } from '@/app/components/TabItem/TabItem';
import Logo from '@/app/components/eblogo.svg';

type HeaderProps = {        
  tabs: TabItemProps[];     
}

const Header = ({ tabs }: HeaderProps) => {
  return (
    <div className={styles.container}>
    
      
      <Image src={Logo} alt="Logo" width={120} height={40} />
      <Tabs tabs={tabs} />
      


      
    </div>
  );
};

export default Header;
