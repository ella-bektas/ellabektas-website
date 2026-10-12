"use client";

import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import styles from './PageSection.module.css';

type PageSectionProps = {
  children?: React.ReactNode;
  paddingTop?: 's' | 'm' | 'l';
  paddingBottom?: 's' | 'm' | 'l';
  backgroundColor?: string;
  direction?: 'vertical' | 'horizontal';
  align?: 'start' | 'center';
  mouseGlow?: boolean;
  glowColor?: string;
};

const paddingTopClass = { s: styles.paddingTopS, m: styles.paddingTopM, l: styles.paddingTopL };
const paddingBottomClass = { s: styles.paddingBottomS, m: styles.paddingBottomM, l: styles.paddingBottomL };

export const PageSection = ({ children, paddingTop, paddingBottom, backgroundColor = 'var(--color-neutral-0)', direction = 'vertical', align = 'start', mouseGlow = false, glowColor = 'rgba(255, 100, 255, 0.4)' }: PageSectionProps) => {
  const ptClass = paddingTop ? paddingTopClass[paddingTop] : '';
  const pbClass = paddingBottom ? paddingBottomClass[paddingBottom] : '';
  const containerRef = useRef<HTMLDivElement>(null);
  const [glowPos, setGlowPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!mouseGlow || !containerRef.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        setGlowPos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const container = containerRef.current;
    container.addEventListener('mousemove', handleMouseMove);
    return () => container.removeEventListener('mousemove', handleMouseMove);
  }, [mouseGlow]);

  return (
    <div ref={containerRef} className={`${styles.container} ${mouseGlow ? styles.hasGlow : ''}`} style={{ backgroundColor }}>
      {mouseGlow && (
        <div
          className={styles.glow}
          style={{
            left: glowPos.x,
            top: glowPos.y,
            background: `radial-gradient(circle, ${glowColor}, transparent)`,
          }}
        />
      )}
      <motion.div
        className={`${styles.content} ${styles[direction]} ${styles[align]} ${ptClass} ${pbClass}`}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ margin: '-80px' }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default PageSection;