"use client";

import TabItem, { TabItemProps } from '@/app/components/TabItem/TabItem';

type TabsProps = {
  tabs: TabItemProps[];
}

const Tabs = ({ tabs }: TabsProps) => {
  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      {tabs.map((tabProps, index) => (
        <TabItem key={index} {...tabProps} />
      ))}
    </div>
  );
};

export default Tabs;
