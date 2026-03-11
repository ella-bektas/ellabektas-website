"use client";

import styles from './ProjectTile.module.css';

type ProjectTileProps = {
  date: string;
  title: string;
  image?: string;
  description: string;
};

const ProjectTile = ({ date, title, image, description }: ProjectTileProps) => {
  return (
    <div className={styles.container}>

     <div className={styles.imageContainer}>
  {image && <img className={styles.image} src={image} alt={title} />}
</div>
<p>{date}</p>

      <div className={styles.heafer}>{title}</div>
      <p>{description}</p>
    </div>
  );
};

export default ProjectTile;