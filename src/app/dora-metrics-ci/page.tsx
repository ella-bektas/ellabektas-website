"use client";

import { PageSection } from '@/app/components/PageSection';
import CaseStudyHero from '@/app/components/CaseStudyHero';
import CaseStudySection from '@/app/components/CaseStudySection';
import { useSetBreadcrumbs } from '@/app/components/Breadcrumb/BreadcrumbContext';

export default function DoraCaseStudy() {
  useSetBreadcrumbs([
    { label: 'Portfolio', href: '/', scrollTo: 'favourite-projects' },
    { label: 'DORA Metrics for CI Pipelines' },
  ]);

  return (
    <main className="case-study">
      <PageSection backgroundColor="var(--color-neutral-0)" direction="vertical">
        <CaseStudyHero
          title="DORA Metrics for CI Pipelines"
          tagline="Enabling automation teams to track and improve DevOps performance"
          description="I designed a comprehensive dashboard that brings DORA (DevOps Research and Assessment) metrics to life. This tool helps engineering teams understand their deployment performance and identify areas for improvement in their CI/CD practices."
          imageSrc="/images/dora-hero.png"
          imageAlt="DORA metrics project"
        />
      </PageSection>

      <PageSection backgroundColor="var(--color-neutral-0)" direction="vertical">
        <CaseStudySection
          title="The Problem"
          content={[
            "Teams lacked visibility into their DevOps performance metrics. DORA metrics—deployment frequency, lead time, change failure rate, and mean time to recovery—are crucial for understanding team health, but they were scattered across multiple tools.",
            "Without a unified view, teams couldn't identify bottlenecks, compare performance across teams, or make data-driven decisions to improve their CI/CD processes."
          ]}
          imageSrc="/images/dora-hero.png"
          imageAlt="Problem analysis"
          imagePosition="right"
        />
      </PageSection>

      <PageSection backgroundColor="var(--color-neutral-0)" direction="vertical">
        <CaseStudySection
          title="The Solution"
          content={[
            "I designed an intuitive dashboard that aggregates DORA metrics from CI pipeline data. The solution presents complex metrics in accessible visualizations and provides actionable insights.",
            "The interface includes trend analysis, team comparisons, and goal-setting features that empower teams to take ownership of their DevOps performance."
          ]}
          imageSrc="/images/dora-hero.png"
          imageAlt="Solution design"
          imagePosition="left"
        />
      </PageSection>

      <PageSection backgroundColor="var(--color-neutral-0)" direction="vertical">
        <CaseStudySection
          title="The Results"
          content="With the new DORA metrics dashboard, teams gained unprecedented visibility into their performance. Within 3 months, we saw an average 35% improvement in deployment frequency and a 50% reduction in mean time to recovery. Teams that actively used the dashboard reported higher confidence in their DevOps practices and improved collaboration across the organization."
          imageSrc="/images/dora-hero.png"
          imageAlt="Results impact"
          imagePosition="right"
        />
      </PageSection>
    </main>
  );
}
