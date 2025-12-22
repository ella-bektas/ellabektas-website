"use client";

import { useState, ReactNode } from 'react'; 
import styles from './Tabs.module.css';


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
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`${styles.tabButton} ${
              index === activeIndex ? styles.active : ''
            }`}
          >
            {child.props.title}
          </button>
        ))}
      </div>

      <div className={styles.tabContent}>
        {tabs[activeIndex]}
      </div>
    </div>
  );
};

export default Tabs;