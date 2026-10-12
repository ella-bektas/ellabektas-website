"use client";

import Image from 'next/image';
import styles from './CaseStudyHero.module.css';
import Title from '@/app/components/Typography/Title';
import BodyText from '@/app/components/Typography/BodyText';

type CaseStudyHeroProps = {
  title: string;
  tagline: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  noTopPadding?: boolean;
};

export const CaseStudyHero = ({
  title,
  tagline,
  description,
  imageSrc,
  imageAlt,
  noTopPadding = false
}: CaseStudyHeroProps) => {
  return (
    <div className={`${styles.hero} ${noTopPadding ? styles.noTopPadding : ''}`}>
      <div className={styles.content}>
        <Title size="xl">{title}</Title>
        <BodyText size="m" weight="bold">{tagline}</BodyText>
        <BodyText size="m">{description}</BodyText>
      </div>
      <div className={styles.image}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={400}
          height={600}
          priority
        />
      </div>
    </div>
  );
};

export default CaseStudyHero;
