"use client";

import styles from "./page.module.css";
import { Button } from './components/Button/Button'
import Link from 'next/link'
import Image from 'next/image'
import ProjectTile from './components/ProjectTile/ProjectTile';
import Title from './components/Typography/Title';
import Stack from './components/Button/Stack/Stack';
import { PageSection } from './components/PageSection';
import BodyText from './components/Typography/BodyText';

export default function Home() {
  return (
    <main>
      <PageSection backgroundColor="white" direction="vertical" align="center">
        <Title size="xl" className={styles.centeredTitle}>Making complexity<br />feel <span style={{ color: '#C5937A' }}>easy.</span></Title>
        <BodyText size="m">I make complex tech simple to use.</BodyText>
        <Stack direction="horizontal" gap="s">
          <Link href="/about"><Button>Learn more</Button></Link>
          <Link href="https://www.linkedin.com/in/ella-bektas-2111061a9" target="_blank" rel="noopener noreferrer"><Button variant="secondary" iconLeft="Linkedin">Connect</Button></Link>
        </Stack>
      </PageSection>

      <PageSection backgroundColor="white" direction="vertical">
        <div className={styles.grid}>
          <ProjectTile
            date="2026"
            title="Gitflow for CI/CD"
            image="./images/gitflow-hero.png"
            description="Introducing a new Gitflow branching strategy into our continuous delivery product."
            href="/"
          />
          <ProjectTile
            date="2025"
            title="DORA metrics for CI pipelines"
            image="./images/dora-hero.png"
            description="Enabling automation teams to track and improve DevOps performance."
            href="/"
          />
        </div>
      </PageSection>
    </main>
  );
}
