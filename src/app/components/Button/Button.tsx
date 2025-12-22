'use client'

import styles from './Button.module.css'
import React from 'react'

type ButtonProps = {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'tertiary'
  onClick?: () => void
  icon?: React.ReactNode // the icon itself
  iconLeft?: boolean
  iconRight?: boolean
}

export const Button = ({ children, variant = 'primary', onClick }: ButtonProps) => {
  const className = styles[variant || 'primary']

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  )
}
