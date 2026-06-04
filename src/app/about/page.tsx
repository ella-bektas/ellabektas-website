import Link from "next/link"
import { Button } from "../components/Button"
import Stack from "../components/Button/Stack/Stack"
import { PageSection } from "../components/PageSection"
import BodyText from "../components/Typography/BodyText"
import Title from "../components/Typography/Title"
import styles from "./about.module.css"

const About = () => {
	return (
		<main>

			{/* Hero */}
			<PageSection backgroundColor="white" direction="horizontal" align="center">
				<Stack direction="vertical" gap="l" align="start">
					<Title size="xl">About.</Title>
					<BodyText size="m">
						I care about the whole problem, not just the interface. I build products where user problems drive every decision.
					</BodyText>
					<Stack direction="horizontal" gap="s">
						<Link href="https://www.linkedin.com/in/ella-bektas-2111061a9" target="_blank" rel="noopener noreferrer"><Button iconLeft="Linkedin">Connect</Button></Link>
						<Link href="/"><Button variant="secondary">See my work</Button></Link>
					</Stack>
				</Stack>
				<div className={styles.heroPhoto} />
			</PageSection>

			{/* Experience */}
			<PageSection backgroundColor="grey" direction="vertical">
				<span className={styles.sectionLabel}>Experience</span>
				<Title>How I got into product</Title>
				<BodyText size="m">
					My first product role was at a machine learning company that built software for lab scientists. I was the bridge between the technology and the people using it, helping non data scientists extract value from machine learning models to enable predictive experimental design and speed up the discovery of new materials in R&D.

				</BodyText>
				<BodyText size="m">
					 Since 2024 I have been working in the Salesforce DevOps space at Gearset, the leading DevOps platform for Salesforce. Working within the product team here has sharpened how I think about building software. We take a jobs-to-be-done approach, putting user problems at the core of every decision and that has shaped a lot of how I work today.
				</BodyText>
				<div className={styles.threeColGrid}>
					<div className={styles.card}>
						<span className={styles.cardLabel}>Product Manager</span>
						<BodyText size="m" weight="bold">Gearset + DevOps</BodyText>
						<BodyText size="s">Helping teams to visualise and improve their DevOps performance.</BodyText>
					</div>
					<div className={styles.card}>
						<span className={styles.cardLabel}>Internship</span>
						<BodyText size="m" weight="bold">Intelligens + Machine Learning</BodyText>
						<BodyText size="s">Helping teams to monitor and improve their DevOps performance.</BodyText>
					</div>
					<div className={styles.card}>
						<span className={styles.cardLabel}>Student</span>
						<BodyText size="m" weight="bold">Lancaster University</BodyText>
						<BodyText size="s">Helping teams to monitor and improve their DevOps performance.</BodyText>
					</div>
				</div>
			</PageSection>

			{/* Technical stack */}
			<PageSection backgroundColor="white" direction="vertical">
				<Title>Technical stack</Title>
				<BodyText size="m">
					I enjoy picking up technical tools as the market changes. Coding has been part of my work from start to end — tracking instrumentation with Amplitude, I&apos;m developing my JavaScript and TypeScript, and I&apos;m very familiar with HTML and CSS.
				</BodyText>
				<Stack direction="vertical" gap="m">
					<div className={styles.skillRow}>
						<span className={styles.skill}><span className={`${styles.dot} ${styles.dotBlue}`} />Figma</span>
						<span className={styles.skill}><span className={`${styles.dot} ${styles.dotGrey}`} />Notion</span>
						<span className={styles.skill}><span className={`${styles.dot} ${styles.dotOrange}`} />Amplitude</span>
						<span className={styles.skill}><span className={`${styles.dot} ${styles.dotRed}`} />Salesforce</span>
						<span className={styles.skill}><span className={`${styles.dot} ${styles.dotYellow}`} />JavaScript</span>
					</div>
					<div className={styles.skillRow}>
						<span className={styles.skill}><span className={`${styles.dot} ${styles.dotBlue}`} />TypeScript</span>
						<span className={styles.skill}><span className={`${styles.dot} ${styles.dotOrange}`} />HTML</span>
						<span className={styles.skill}><span className={`${styles.dot} ${styles.dotPurple}`} />CSS</span>
					</div>
				</Stack>
			</PageSection>

			{/* What drives me */}
			<PageSection backgroundColor="grey" direction="vertical">
				<Title>What drives me</Title>
				<div className={styles.twoColGrid}>
					<div className={styles.card}>
						<span className={styles.cardNumber}>1</span>
						<BodyText size="m" weight="bold">User-first thinking</BodyText>
						<BodyText size="s">Framing every decision to a real user problem.</BodyText>
					</div>
					<div className={styles.card}>
						<span className={styles.cardNumber}>2</span>
						<BodyText size="m" weight="bold">End to end product focus</BodyText>
						<BodyText size="s">Helping teams to improve their DevOps performance.</BodyText>
					</div>
					<div className={styles.card}>
						<span className={styles.cardNumber}>3</span>
						<BodyText size="m" weight="bold">Data informed</BodyText>
						<BodyText size="s">Helping teams to visualise and improve their DevOps performance.</BodyText>
					</div>
					<div className={styles.card}>
						<span className={styles.cardNumber}>4</span>
						<BodyText size="m" weight="bold">Technical fluency</BodyText>
						<BodyText size="s">Helping teams to visualise and improve their DevOps performance.</BodyText>
					</div>
				</div>
			</PageSection>

		</main>
	)
}

export default About
