"use client";

import { PageSection } from '@/app/components/PageSection';
import CaseStudyHero from '@/app/components/CaseStudyHero';
import CaseStudySection from '@/app/components/CaseStudySection';

export default function CaseStudyTemplate() {
  return (
    <main>
      <PageSection backgroundColor="white" direction="vertical">
        <CaseStudyHero
          title="Project Title"
          tagline="Tagline goes here maybe"
          description="Hi, I'm Ella, a product designer at Gearset working in DevOps space for Salesforce teams. I turn complex technical workflows into interfaces engineers actually want to use."
          imageSrc="/images/outline-profile.png"
          imageAlt="Project hero image"
        />
      </PageSection>

      <PageSection backgroundColor="white" direction="vertical">
        <CaseStudySection
          title="The Problem"
          content="Hi, I'm Ella, a product designer at Gearset working in DevOps space for Salesforce teams. I turn complex technical workflows into interfaces engineers actually want to use. Hi, I'm Ella, a product designer at Gearset working in DevOps space for Salesforce teams."
          imageSrc="/images/outline-profile.png"
          imageAlt="Problem section"
          imagePosition="right"
        />
      </PageSection>

      <PageSection backgroundColor="white" direction="vertical">
        <CaseStudySection
          title="The Solution"
          content={[
            "Hi, I'm Ella, a product designer at Gearset working in DevOps space for Salesforce teams. I turn complex technical workflows into interfaces engineers actually want to use.",
            "Embedded with the engineers and product managers, I never design in isolation."
          ]}
          imageSrc="/images/outline-profile.png"
          imageAlt="Solution section"
          imagePosition="left"
        />
      </PageSection>

      <PageSection backgroundColor="white" direction="vertical">
        <CaseStudySection
          title="The Results"
          content="Hi, I'm Ella, a product designer at Gearset working in DevOps space for Salesforce teams. I turn complex technical workflows into interfaces engineers actually want to use."
          imageSrc="/images/outline-profile.png"
          imageAlt="Results section"
          imagePosition="right"
        />
      </PageSection>
    </main>
  );
}
