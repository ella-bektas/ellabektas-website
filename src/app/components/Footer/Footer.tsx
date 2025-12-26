"use client";

import styles from './Footer.module.css';
import { Button } from "@/app/components/Button/Button";
import Link from 'next/link'


const Footer = () => {
	return (
		<div className={styles.container}> 

        <div className={styles.ctas}>

        <Link href="https://www.linkedin.com/in/ella-bektas-2111061a9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"> 
        <Button iconLeft="Linkedin" variant="link">Linkedin</Button>
        </Link>
        <Link href="https://github.com/ella-bektas">
        <Button iconLeft="Github" variant="link">Github</Button>
        </Link>
        
        </div>
         </div>
    
		)
	} 
	

export default Footer;
