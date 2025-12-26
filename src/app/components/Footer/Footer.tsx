"use client";

import styles from './Footer.module.css';
import { Icons, IconName } from "@/app/icons";
import { Button } from "@/app/components/Button/Button";

const Footer = () => {
	return (
		<div className={styles.container}> 

        <Button iconLeft="Linkedin" variant="tertiary">Linkedin</Button>
         </div>
    
		)
	} 
	

export default Footer;
