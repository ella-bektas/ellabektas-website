'use client'

import styles from './Button.module.css'
import React, { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'tertiary'
  onClick?: () => void
  icon?: React.ReactNode // the icon itself
  iconLeft?: boolean
  iconRight?: boolean
}

export const Button = ({ children, variant = 'primary', onClick, iconLeft }: ButtonProps) => {
  const className = styles[variant]

  return (
    <button className={className} onClick={onClick}>
      {iconLeft && <span className={styles.icon}>{iconLeft}</span>}
      {children}
    </button>
  )
}
