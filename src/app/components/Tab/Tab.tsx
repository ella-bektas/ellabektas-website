"use client";

import { useState, ReactNode } from 'react'; 
import styles from './Tabs.module.css';
import { Button } from '../Button/Button';
import { Icons, IconName } from "@/app/icons";


interface TabsProps {
  children: ReactNode;
}

const Tabs = ({ children }: TabsProps) => {
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

export default Tabs;