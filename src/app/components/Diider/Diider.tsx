"use client";

import Image from 'next/image';
import styles from './Diider.module.css';

type DiiderProps = {
  width?: number;
  height?: number;
};

export const Diider = ({ width = 800, height = 14 }: DiiderProps) => {
  return (
    <div className={styles.diider}>
      <Image
        src="/images/divider.svg"
        alt="divider"
        width={width}
        height={height}
        style={{ width: '100%', height: 'auto' }}
      />
    </div>
  );
};

export default Diider;
