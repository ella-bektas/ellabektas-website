"use client";

import { useState, ReactNode } from 'react';


//ntitle defines the name of the tab
interface TabProps {
  title: string;
  children: ReactNode; // content in tab can be anything
}

interface TabsProps {
  children: ReactNode;
}

const Tabs = ({ children }: TabsProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Normalize children into an array
  const tabs = Array.isArray(children) ? children : [children];

  return (
    <div>
      <div style={{ display: 'flex', gap: '8px', marginBottom: '1rem' }}>
        {tabs.map((child: any, index: number) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
          >
            {child.props.title}
          </button>
        ))}
      </div>

      <div>{tabs[activeIndex]}</div>
    </div>
  );
};

export default Tabs;