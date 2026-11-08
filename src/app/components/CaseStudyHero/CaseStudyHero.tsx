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
  titleFontSize?: string;
  subtitle?: string;
  imageBelowHeading?: boolean;
};

export const CaseStudyHero = ({
  title,
  tagline,
  description,
  imageSrc,
  imageAlt,
  noTopPadding = false,
  titleFontSize,
  subtitle,
  imageBelowHeading = false
}: CaseStudyHeroProps) => {
  return (
    <div className={`${styles.wrapper} ${noTopPadding ? styles.noTopPadding : ''}`}>
      <div className={styles.heading}>
        <Title size="xl" style={titleFontSize ? { fontSize: titleFontSize } : undefined}>{title}</Title>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
      {imageBelowHeading ? (
        <>
          <div className={styles.fullImage}>
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={1200}
              height={756}
              priority
            />
          </div>
          <div className={styles.content}>
            <BodyText size="m" weight="bold">{tagline}</BodyText>
            <BodyText size="m">{description}</BodyText>
          </div>
        </>
      ) : (
        <div className={styles.hero}>
          <div className={styles.content}>
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
      )}
    </div>
  );
};

export default CaseStudyHero;
