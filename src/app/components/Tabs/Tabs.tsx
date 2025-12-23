'use client';

import styles from './Tabs.module.css';
import TabItem, { TabItemProps } from '@/app/components/TabItem/TabItem';
import { usePathname } from 'next/navigation';

export type TabsProps = {
  tabs: Omit<TabItemProps, 'isActive'>[]; // isActive will be calculated internally
};

const Tabs = ({ tabs }: TabsProps) => {
  const pathname = usePathname();

  return (
    <div className={styles.tabsNav}>
      {tabs.map((tabProps, index) => (
        <TabItem
          key={index}
          {...tabProps}
          isActive={tabProps.href === pathname} // calculate active state
        />
      ))}
    </div>
  );
};

export default Tabs;
