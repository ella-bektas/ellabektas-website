"use client";

import { PageSection } from '@/app/components/PageSection';
import CaseStudyHero from '@/app/components/CaseStudyHero';
import CaseStudySection from '@/app/components/CaseStudySection';

export default function GitflowCaseStudy() {
  return (
    <main>
      <PageSection backgroundColor="white" direction="vertical">
        <CaseStudyHero
          title="Gitflow for CI/CD"
          tagline="Enabling enterprise teams to adopt mature DevOps branching practices"
          description="We were losing enterprise deals specifically because our branching model didn't support Gitflow workflows. For teams with more mature DevOps practices, this was a dealbreaker. I led the design effort to unlock this market segment."
          imageSrc="/images/gitflow-hero.png"
          imageAlt="Gitflow CI/CD project"
        />
      </PageSection>

      <PageSection backgroundColor="white" direction="vertical">
        <CaseStudySection
          title="The Problem"
          content={[
            "Gitflow adoption tends to signal a mature DevOps practice—these were teams who'd already invested in a sophisticated branching process. Our product only supported feature independence models, forcing teams to choose: abandon a process they'd built their workflow around, or walk away. Some changed their process to fit us. Others didn't, and we lost the deal. There was no middle ground.",
            "This was a recurring blocker in early sales conversations that came up for specific customer segments we wanted to win."
          ]}
          imageSrc="/images/gitflow-hero.png"
          imageAlt="Problem analysis"
          imagePosition="right"
        />
      </PageSection>

      <PageSection backgroundColor="white" direction="vertical">
        <CaseStudySection
          title="Discovery & Reframing"
          content={[
            "Going in, we assumed we could extend our existing pipeline visualization to support Gitflow. That assumption broke almost immediately: in Gitflow, the artifact moving through the pipeline isn't consistent—it changes shape depending on where you are in the process.",
            "The reframing moment came from mapping the handoff between two roles. Developers building initial features operated in a workflow similar to our existing model. But once a release branch was cut, ownership shifted to release managers, who took that release through testing and deployment as a single unit.",
            "Discovery also surfaced a harder edge case: fixing a release after it had already been cut and deployed. Any solution would eventually need guardrails to prevent users from corrupting a release mid-flight."
          ]}
          imageSrc="/images/gitflow-hero.png"
          imageAlt="Discovery insights"
          imagePosition="left"
        />
      </PageSection>

      <PageSection backgroundColor="white" direction="vertical">
        <CaseStudySection
          title="Ideation & Testing"
          content={[
            "We explored three directions in ideation. The first mirrored a traditional Gitflow diagram with branches as lines between nodes—it broke down quickly and couldn't show releases deploying to multiple orgs. The second treated the release as a single artifact moving down the pipeline—but the dynamic movement made it hard for users to tell where they actually were.",
            "The third approach split the pipeline into three distinct stages: Development & Integration (where devs build collaboratively), Release (where a release manager deploys to multiple orgs in order), and Production (where the release goes live, with hotfixes handled separately). Testing with over 15 users validated this three-stage model directly against the internal favorite—the staged approach matched how users already thought about their process."
          ]}
          imageSrc="/images/gitflow-hero.png"
          imageAlt="Solution design"
          imagePosition="right"
        />
      </PageSection>

      <PageSection backgroundColor="white" direction="vertical">
        <CaseStudySection
          title="The Result"
          content={[
            "We shipped the core pipeline visualization first to get value in front of users quickly, validating the riskier assumption about the artifact model before investing in complex edge-case flows.",
            "Once v1 shipped, we tested the release-fix workflow with pilot users who had real, lived experience with the core pipeline. Their feedback was grounded in actual usage rather than hypothetical scenarios, making the second phase design significantly stronger."
          ]}
          imageSrc="/images/gitflow-hero.png"
          imageAlt="Results impact"
          imagePosition="left"
        />
      </PageSection>
    </main>
  );
}
