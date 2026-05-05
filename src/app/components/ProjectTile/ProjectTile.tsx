"use client";

import Link from 'next/link';
import styles from './ProjectTile.module.css';

type Alignment = 'bottom'  | 'center';

type ProjectTileProps = {
  date: string;
  title: string;
  image?: string;
  description: string;
  href: string;
  alignment?: Alignment;
};

const ProjectTile = ({ date, title, image, description, href, alignment = 'bottom' }: ProjectTileProps) => {
  return (
    <Link href={href} className={styles.container}>
      <div className={`${styles.imageContainer} ${styles[alignment]}`}>
        {image && <img className={styles.image} src={image} alt={title} />}
      </div>
      <div className={styles.date}>{date}</div>
      <div className={styles.header}>{title}</div>
      <p>{description}</p>
    </Link>
  );
};

export default ProjectTile;