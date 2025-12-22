"use client";

import { useState, ReactNode } from 'react'; 
import styles from './Tabs.module.css';
import { Button } from '../Button/Button';


//Title defines the name of the tab
interface TabProps {
  title: string;
  children: ReactNode; // content in tab can be anything
}

interface TabsProps {
  children: ReactNode;
}

const Tabs = ({ children }: TabsProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // children into an array
  const tabs = Array.isArray(children) ? children : [children];

  return (
    <div className={styles.tabs}>
      <div className={styles.tabsNav}>
        {tabs.map((child: any, index: number) => (
          <Button
            key={index}
            onClick={() => setActiveIndex(index)}
            variant={index === activeIndex ? 'secondary' : 'tertiary'}
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

export default Tabs;