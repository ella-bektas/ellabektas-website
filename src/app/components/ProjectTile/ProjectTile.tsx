"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './ProjectTile.module.css';

type Alignment = 'bottom'  | 'center';

type ProjectTileProps = {
  date: string;
  title: string;
  image?: string;
  description: string;
  href?: string;
  alignment?: Alignment;
  index?: number;
  active?: boolean;
};

const ProjectTile = ({ date, title, image, description, href, alignment = 'bottom', index = 0, active = true }: ProjectTileProps) => {
  const content = (
    <>
      <div className={`${styles.imageContainer} ${styles[alignment]} ${active ? '' : styles.locked}`}>
        {image ? (
          <img className={styles.image} src={image} alt={title} />
        ) : (
          <span className={styles.comingSoon}>Coming soon</span>
        )}
        {!active && image && (
          <div className={styles.overlay}>
            <span className={styles.overlayLabel}>Coming soon</span>
          </div>
        )}
      </div>
      <div className={styles.date}>{date}</div>
      <div className={styles.header}>{title}</div>
      <p>{description}</p>
    </>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15, ease: 'easeOut' }}
    >
      {href && active ? (
        <Link href={href} className={styles.container}>{content}</Link>
      ) : (
        <div className={`${styles.container} ${styles.static}`}>{content}</div>
      )}
    </motion.div>
  );
};

export default ProjectTile;