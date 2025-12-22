'use client'

import styles from './Button.module.css'
import React from 'react'

type ButtonProps = {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  onClick?: () => void
}

export const Button = ({ children, variant = 'primary', onClick }: ButtonProps) => {
  const className =
    variant === 'primary' ? styles.primary : styles.secondary

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  )
}
