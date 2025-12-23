"use client"

import { ReactNode } from "react";
import styles from './TabItem.module.css';
import {Icons, IconName } from '@/app/icons';

// Step 1 - Define the props and their types & exp so can be used.
export type TabItemProps = {
    title: string;
    onClick?: () => void;
    state: 'active' | 'inactive';
    iconLeft?: IconName;
  };


  //Step 2 - Define the new react functional component
  const TabItem = ({
    title,
    onClick,
    state,
    iconLeft,
  }: TabItemProps) => {

// Step 3: Get the icon component from the Icons object
  const LeftIcon = iconLeft ? Icons[iconLeft] : null;

   return (
    <button onClick={onClick} title={title} className={styles[state]}>
      {LeftIcon && <LeftIcon />}
      {title}
    </button>
    );
  };
  

  export default TabItem;
