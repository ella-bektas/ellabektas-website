"use client";

import styles from "./page.module.css";
import { Button } from './components/Button/Button'
import Tabs from './components/Tabs/Tabs';
import Header from './components/Header/Header';
import { TabsProps } from '@/app/components/Tabs/Tabs';
import Link from 'next/link'


export default function Home() {
  return (
    <div>
    
    
        <div className={styles.intro}>
          <h1>Hello, Welcome!</h1>
          <p>
          Hi! I’m a User Experience Designer at Gearset.  I’ve been designing, trying and testing great tech products professionally for over 3 years.
          
          </p>
        </div>
        <div className={styles.ctas}>
        <Button iconLeft="HomeOutline" variant="primary">My work</Button>
        <Button iconLeft="HomeOutline" variant="secondary">About</Button>
        </div>
      
    </div>
  );
}

