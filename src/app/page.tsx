"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { Button } from './components/Button/Button'
import Tabs from './components/Tabs/Tabs';
import Header from './components/Header/Header';
import { TabsProps } from '@/app/components/Tabs/Tabs';


export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        

<Header
  tabs={[
   { title: 'Home', state: 'active', iconLeft: 'Home', onClick: () => console.log('Home clicked') },
   { title: 'Profile', state: 'inactive', iconLeft: 'User', onClick: () => console.log('Profile clicked') },
   { title: 'Settings', state: 'inactive', iconLeft: 'Settings', onClick: () => console.log('Settings clicked') },
   ]}
/>


        <div className={styles.intro}>
          <h1>Hello, Welcome!</h1>
          <p>
          Hi! I’m a User Experience Designer at Gearset.  I’ve been designing, trying and testing great tech products professionally for over 3 years.
          
          </p>
        </div>
        <div className={styles.ctas}>
        <Button iconLeft="Home" variant="primary">My work</Button>
        <Button iconLeft="Home" variant="secondary">About</Button>
        </div>
      </main>
    </div>
  );
}
