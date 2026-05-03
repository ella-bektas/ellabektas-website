"use client";

import styles from "./page.module.css";
import { Button } from './components/Button/Button'
import Link from 'next/link'
import Image from 'next/image'
import ProjectTile from './components/ProjectTile/ProjectTile';




export default function Home() {
  return (
<main>
      <div> 
      <div className={`${styles.single} ${styles.centered}`}>
        
          <h1>Hi, I'm Ella!</h1>
          <p>I make complex tech simple to use.</p>
       
      </div>
      </div>

<div className={`${styles.single} ${styles.centered}`}> 
  <div className={styles.grid}>
    <ProjectTile
    date="2026"
    title="Gitflow for CI/CD"
    image="/images/gitflow-hero.png"
    description="Introducing a new Gitflow branching strategy into our continuous delivery product."
    href="/"
  />
    <ProjectTile
    date="2025"
    title="DORA metrics for CI pipelines"
    image="/images/project.png"
    description="Enabling automation teams to track and improve DevOps performance."
     href="/"

  />
    <ProjectTile
    date="2025"
    title="Agentforce testing suite"
    image="/images/project.png"
    description="Visualising how can users interrogate results when testing an LLM."
    href="/about"
  />

    <ProjectTile
    date="2025"
    title="Multi-org development"
    image="/images/project.png"
    description="Supporting a modular approach to developing Salesforce orgs, when metadata is shared."
     href="/about"
  />

  </div>


</div>


     

  </main>
  );
}

