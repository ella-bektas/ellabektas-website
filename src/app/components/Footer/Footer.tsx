"use client";

import styles from './Footer.module.css';
import { Button } from "@/app/components/Button/Button";
import Link from 'next/link'


const Footer = () => {
	return (
		<div className={styles.container}> 

        <div className={styles.ctas}>

        <Link href="https://www.linkedin.com/in/ella-bektas-2111061a9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
        <Button iconLeft="Linkedin" variant="link">Linkedin</Button>
        </Link>
        <Link href="https://github.com/ella-bektas" target="_blank" rel="noopener noreferrer">
        <Button iconLeft="Github" variant="link">Github</Button>
        </Link>
        <Link href="https://www.tiktok.com/@deswithella?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer">
        <Button iconLeft="TikTok" variant="link">TikTok</Button>
        </Link>
        <Link href="https://www.youtube.com/@deswithella" target="_blank" rel="noopener noreferrer">
        <Button iconLeft="YoutubeOutline" variant="link">Youtube</Button>
        </Link>
        
        </div>
         </div>
    
		)
	} 
	

export default Footer;
