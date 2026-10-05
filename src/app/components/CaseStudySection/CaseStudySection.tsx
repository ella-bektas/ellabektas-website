"use client";

import Image from 'next/image';
import styles from './CaseStudySection.module.css';
import Title from '@/app/components/Typography/Title';
import BodyText from '@/app/components/Typography/BodyText';
import Divider from '@/app/components/Divider';

type CaseStudySectionProps = {
  title: string;
  content: string | string[];
  imageSrc: string;
  imageAlt: string;
  imagePosition?: 'left' | 'right';
};

export const CaseStudySection = ({
  title,
  content,
  imageSrc,
  imageAlt,
  imagePosition = 'right'
}: CaseStudySectionProps) => {
  const isArray = Array.isArray(content);
  const imageElement = (
    <div className={styles.image}>
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={400}
        height={500}
      />
    </div>
  );

  const textContent = (
    <div className={styles.content}>
      <Title size="l">{title}</Title>
      <Divider />
      {isArray ? (
        content.map((text, index) => (
          <BodyText key={index} size="m">{text}</BodyText>
        ))
      ) : (
        <BodyText size="m">{content}</BodyText>
      )}
    </div>
  );

  return (
    <div className={`${styles.section} ${styles[imagePosition]}`}>
      {imagePosition === 'left' && imageElement}
      {textContent}
      {imagePosition === 'right' && imageElement}
    </div>
  );
};

export default CaseStudySection;
