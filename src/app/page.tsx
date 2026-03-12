"use client";

import styles from "./page.module.css";
import { Button } from './components/Button/Button'
import Link from 'next/link'
import Image from 'next/image'
import ProjectTile from './components/ProjectTile/ProjectTile';




export default function Home() {
  return (
    <div>
      <div> 
      <div className={`${styles.single} ${styles.centered}`}>
        
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

<div className={`${styles.single} ${styles.centered}`}> 
  
  <ProjectTile
    date="2026"
    title="Gitflow for CI/CD"
    image="/images/project.png"
    description="Introducing a new Gitflow branching strategy into our continuous delivery product."
     href="/about"
  />
    <ProjectTile
    date="2026"
    title="Gitflow for CI/CD"
    image="/images/project.png"
    description="Introducing a new Gitflow branching strategy into our continuous delivery product."
     href="/about"
  />

    <ProjectTile
    date="2026"
    title="Gitflow for CI/CD"
    image="/images/project.png"
    description="Introducing a new Gitflow branching strategy into our continuous delivery product."
     href="/about"
  />

    <ProjectTile
    date="2026"
    title="Gitflow for CI/CD"
    image="/images/project.png"
    description="Introducing a new Gitflow branching strategy into our continuous delivery product."
     href="/about"
  />

  
</div>

      
    </div>
  );
}

