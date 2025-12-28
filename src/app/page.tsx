"use client";

import styles from "./page.module.css";
import { Button } from './components/Button/Button'
import Link from 'next/link'


export default function Home() {
  return (
    <div>

      <div className={styles.double}>
        <div className={styles.container}>
          <h1 className={styles.h1}>Building great products</h1>
          <p className={styles.p}>Intro goes here</p>

        </div>
       
        <p>Image goes here</p>

      </div>

      <div> 
      <div className={styles.intro}>
          <h1>Hello, Welcome!</h1>
          <p>
          Hi! I’m a User Experience Designer at Gearset.  I’ve been designing, trying and testing great tech products professionally for over 3 years.
          
          </p>
        </div>
        <div className={styles.ctas}>
        <Button iconLeft="Portfolio" variant="primary">Portfolio</Button>
        <Link href="/about"> 
        <Button iconLeft="User" variant="secondary">About</Button>
        </Link>
        </div>
      </div>


      <div className={styles.single}> 
        <h1>Interested in my work?</h1>
        <p>Ellabektas.com is my corner of the internet where you can find out all about what I love to do. If you want to read about how I designed and coded this website, checkout the case study here.</p>
      </div>
    
       
        
      
    </div>
  );
}

