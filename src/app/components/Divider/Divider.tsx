"use client";

import Image from 'next/image';
import styles from './Divider.module.css';

type DividerProps = {
  width?: number;
  height?: number;
};

export const Divider = ({ width = 800, height = 14 }: DividerProps) => {
  return (
    <div className={styles.divider}>
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

export default Divider;
