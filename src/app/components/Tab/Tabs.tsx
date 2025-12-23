"use client";

import TabItem, { TabItemProps } from '@/app/components/TabItem/TabItem';
import { IconName } from '@/app/icons';

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







/* type Tab = {
  title: string;
  iconLeft?: IconName;
  state: 'active' | 'inactive';
};

type TabsProps = {
  tabs: Tab[];
  onTabClick?: (index: number) => void; 
};

const Tabs = ({ tabs, onTabClick }: TabsProps) => {
  return (
    <div className="tabs-container">
      {tabs.map((tab, index) => (
      <TabItem
       key={index}
       title={tab.title}   
       state={tab.state}
       iconLeft={tab.iconLeft}
       onClick={() => onTabClick?.(index)}
     />
     
      ))}
    </div>
  );
};

export default Tabs;



/* interface TabsProps {
  children: ReactNode;
}

const Tabs = ({ children }: TabsProps) => {//
const [activeIndex, setActiveIndex] = useState(0);

 const tabs = Array.isArray(children) ? children : [children];

// Ella's note - Can pass different buttons or do custom in css module
 
return (
    <div className={styles.tabs}>
      <div className={styles.tabsNav}>
        {tabs.map((child: any, index: number) => (
          <Button
            key={index}
            onClick={() => setActiveIndex(index)}
            variant={index === activeIndex ? 'secondary' : 'tertiary'}
            iconLeft={child.props.iconLeft}
          >
            {child.props.title}
          </Button>
        ))}
      </div>

      <div className={styles.tabContent}>
        {tabs[activeIndex]}
      </div>
    </div>
  );
};

export default Tabs; */