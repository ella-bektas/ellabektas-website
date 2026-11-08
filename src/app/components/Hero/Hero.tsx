"use client";

import Image from 'next/image';
import styles from './Hero.module.css';

type HeroProps = {
  imageSrc: string;
  imageAlt: string;
  imagePosition?: 'left' | 'right';
  imageWidth?: number;
  imageHeight?: number;
  children: React.ReactNode;
};

export const Hero = ({
  imageSrc,
  imageAlt,
  imagePosition = 'left',
  imageWidth = 300,
  imageHeight = 300,
  children
}: HeroProps) => {
  const imageElement = (
    <div className={styles.heroImage}>
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={imageWidth}
        height={imageHeight}
        priority
      />
    </div>
  );

  return (
    <div className={`${styles.hero} ${styles[imagePosition]}`}>
      {imagePosition === 'left' && imageElement}
      <div className={styles.heroContent}>
        {children}
      </div>
      {imagePosition === 'right' && imageElement}
    </div>
  );
};

export default Hero;
