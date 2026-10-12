"use client"

import Link from "next/link"
import { Button } from "../components/Button"
import Stack from "../components/Button/Stack/Stack"
import { PageSection } from "../components/PageSection"
import Divider from "../components/Divider"
import BodyText from "../components/Typography/BodyText"
import Title from "../components/Typography/Title"
import styles from "./about.module.css"

const About = () => {
	return (
		<main>

			{/* Hero */}
			<PageSection backgroundColor="transparent" direction="horizontal" align="center">
				<div className={styles.heroContent}>
					<Stack direction="vertical" gap="l" align="start">
						<Title size="xl">About.</Title>
						<Divider />
						<BodyText size="m">
							I care about the whole problem, not just the interface. I build products where user problems drive every decision.
						</BodyText>
						<Stack direction="horizontal" gap="s">
							<Link href="/"><Button>See my work</Button></Link>
							<Link href="https://www.linkedin.com/in/ella-bektas-2111061a9" target="_blank" rel="noopener noreferrer"><Button variant="secondary" iconLeft="Linkedin">Connect</Button></Link>
						</Stack>
					</Stack>
				</div>
			</PageSection>

			{/* Experience */}
			<PageSection backgroundColor="transparent" direction="vertical">
				<Title>How I got into product</Title>
				<BodyText size="m">
					My first product role was at a machine learning company that built software for lab scientists. I was the bridge between the technology and the people using it, helping non data scientists extract value from machine learning models to enable predictive experimental design and speed up the discovery of new materials in R&D.

				</BodyText>
				<BodyText size="m">
					 Since 2024 I have been working in the Salesforce DevOps space at Gearset, the leading DevOps platform for Salesforce. Working within the product team here has sharpened how I think about building software. We take a jobs-to-be-done approach, putting user problems at the core of every decision and that has shaped a lot of how I work today.
				</BodyText>
			</PageSection>

		</main>
	)
}

export default About
