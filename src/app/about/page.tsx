"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "../components/Button"
import Stack from "../components/Button/Stack/Stack"
import { PageSection } from "../components/PageSection"
import BodyText from "../components/Typography/BodyText"
import Title from "../components/Typography/Title"
import styles from "./about.module.css"
import { HiOutlineUser } from "react-icons/hi2"
import { HiOutlineViewfinderCircle } from "react-icons/hi2"
import { HiOutlineChartBar } from "react-icons/hi2"
import { HiOutlineCommandLine } from "react-icons/hi2"

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
						<Link href="/"><Button>See my work</Button></Link>
						<Link href="https://www.linkedin.com/in/ella-bektas-2111061a9" target="_blank" rel="noopener noreferrer"><Button variant="secondary" iconLeft="Linkedin">Connect</Button></Link>
					</Stack>
				</Stack>
				<motion.div
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
				>
					<Image src="/images/ella-bektas.png" alt="Ella Bektas" width={260} height={260} className={styles.heroPhoto} />
				</motion.div>
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
						<HiOutlineUser size={24} color="#C5937A" />
						<BodyText size="m" weight="bold">User-first thinking</BodyText>
						<BodyText size="s">Every decision traces back to a real user problem, not what seems like a good idea.</BodyText>
					</div>
					<div className={styles.card}>
						<HiOutlineViewfinderCircle size={24} color="#C5937A" />
						<BodyText size="m" weight="bold">End to end product focus</BodyText>
						<BodyText size="s">I care about the whole problem, not just the interface. I stay close to the work from discovery through to delivery.</BodyText>
					</div>
					<div className={styles.card}>
						<HiOutlineChartBar size={24} color="#C5937A" />
						<BodyText size="m" weight="bold">Data informed</BodyText>
						<BodyText size="s">I use data to validate assumptions and measure impact, not just to report on what happened.</BodyText>
					</div>
					<div className={styles.card}>
						<HiOutlineCommandLine size={24} color="#C5937A" />
						<BodyText size="m" weight="bold">Technical fluency</BodyText>
						<BodyText size="s">I pick up new tools and complex problems quickly, whether technical or user-facing.</BodyText>
					</div>
				</div>
			</PageSection>

		</main>
	)
}

export default About
