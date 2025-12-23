"use client";

import styles from './Tabs.module.css';
import TabItem, { TabItemProps } from '@/app/components/TabItem/TabItem';

export type TabsProps = {
  tabs: TabItemProps[];
}

const Tabs = ({ tabs }: TabsProps) => {
  return (
    <div className={styles.tabs}>
      <div className={styles.tabsNav}>
        {tabs.map((tabProps, index) => (
          <TabItem key={index} {...tabProps} />
        ))}
      </div> 
    </div>
  );
};

export default Tabs;
