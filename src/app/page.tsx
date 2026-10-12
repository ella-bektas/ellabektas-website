"use client";

import styles from "./page.module.css";
import { Button } from './components/Button/Button'
import Link from 'next/link'
import ProjectTile from './components/ProjectTile/ProjectTile';
import Title from './components/Typography/Title';
import Stack from './components/Button/Stack/Stack';
import { PageSection } from './components/PageSection';
import BodyText from './components/Typography/BodyText';
import Hero from './components/Hero';
import Divider from './components/Divider';

export default function Home() {
  return (
    <main>
      <PageSection backgroundColor="white" direction="vertical" align="center" mouseGlow={true} glowColor="rgba(210, 180, 140, 0.4)">
        <Hero imageSrc="/images/outline-profile.png" imageAlt="Ella Bektas" imagePosition="left" imageWidth={400} imageHeight={400}>
          <Title size="xl">Ella Bektas</Title>
          <BodyText size="m" weight="bold" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.75rem)' }}>Making technical products feel easy.</BodyText>
          <Divider />
          <BodyText size="m">I'm Ella, a Product Designer at Gearset who designs DevOps and automation solutions for Salesforce teams. I look at the jobs a user is trying to achieve and design solutions to the problems that are blocking them from completing those jobs. Our engineers, Product Managers and I solve the problems together. I never design in isolation.</BodyText>
          <Stack direction="horizontal" gap="s">
            <Link href="/about"><Button>About me</Button></Link>
            <Link href="https://www.linkedin.com/in/ella-bektas-2111061a9" target="_blank" rel="noopener noreferrer"><Button variant="secondary">LinkedIn</Button></Link>
          </Stack>
        </Hero>
      </PageSection>

      <PageSection backgroundColor="white" direction="vertical">
        <div className={styles.grid}>
          <ProjectTile
            date="2026"
            title="Gitflow for CI/CD"
            image="./images/gitflow-hero.png"
            description="Introducing a new Gitflow branching strategy into our continuous delivery product."
            href="/gitflow-ci-cd"
            index={0}
          />
          <ProjectTile
            date="2025"
            title="DORA metrics for CI pipelines"
            image="./images/dora-hero.png"
            description="Enabling automation teams to track and improve DevOps performance."
            href="/dora-metrics-ci"
            index={1}
          />
        </div>
      </PageSection>
    </main>
  );
}
