"use client";

import styles from "./page.module.css";
import { Button } from './components/Button/Button'
import Link from 'next/link'
import Image from 'next/image'




export default function Home() {
  return (
    <div>
      <div> 
      <div className={`${styles.single} ${styles.centered}`}>
        <Image
          src="/coverImage.png"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: 'auto', height: '40vh' }}
          alt="Cover image"
    />
          <h1>Hi, I'm Ella!</h1>
          <p>I make complex tech simple to use.</p>
                  <div className={styles.ctas}>
        <Button iconLeft="Portfolio" variant="primary">Portfolio</Button>
        <Link href="/about"> 
        <Button iconLeft="User" variant="secondary">About</Button>
        </Link>
        </div>
       
        </div>

      </div>



    
       
        
      
    </div>
  );
}

