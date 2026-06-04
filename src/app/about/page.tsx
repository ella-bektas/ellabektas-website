import { Button } from "../components/Button"
import Stack from "../components/Button/Stack/Stack"
import { PageSection } from "../components/PageSection"
import BodyText from "../components/Typography/BodyText"
import Title from "../components/Typography/Title"



const About = () => {
	return (
		<main>
		

			<PageSection  backgroundColor="white" direction="horizontal">
				<Stack  align="start" gap="l">
					<Title size="s">About.</Title>
					<BodyText size="m">
						I care about the whole problem, not just the interface. I build products where user problems drive every decision.
					</BodyText>
					<Button>See my work</Button>
				</Stack>	
				<p>Photo</p>
			</PageSection>

          
		
    
		
		</main>

		)
	} 
	
export default About