"use client";

import { useEffect, useState } from 'react';
import { Icons } from '@/app/icons';
import styles from './DarkModeToggle.module.css';

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = saved ? saved === 'dark' : prefersDark;

    setIsDark(shouldBeDark);
    applyTheme(shouldBeDark ? 'dark' : 'light');
  }, []);

  const applyTheme = (theme: 'light' | 'dark') => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  };

  const toggleDarkMode = () => {
    const newTheme = isDark ? 'light' : 'dark';
    setIsDark(!isDark);
    applyTheme(newTheme);
  };

  if (!mounted) return null;

  const ToggleIcon = isDark ? Icons.ToggleOn : Icons.ToggleOff;
  const MoonIcon = Icons.Moon;
  const SunIcon = Icons.Sun;

  return (
    <button
      onClick={toggleDarkMode}
      className={styles.toggle}
      aria-label="Toggle dark mode"
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <SunIcon className={styles.icon} />
      <ToggleIcon className={styles.toggleIcon} />
      <MoonIcon className={styles.icon} />
    </button>
  );
}
