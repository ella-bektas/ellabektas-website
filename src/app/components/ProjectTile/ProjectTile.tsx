"use client";

import Link from 'next/link';
import styles from './ProjectTile.module.css';

type ProjectTileProps = {
  date: string;
  title: string;
  image?: string;
  description: string;
  href: string;
};

const ProjectTile = ({ date, title, image, description, href }: ProjectTileProps) => {
  return (
    <Link href={href} className={styles.container}>
      <div className={styles.imageContainer}>
        {image && <img className={styles.image} src={image} alt={title} />}
      </div>
      <p>{date}</p>
      <div className={styles.header}>{title}</div>
      <p>{description}</p>
    </Link>
  );
};

export default ProjectTile;