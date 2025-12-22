import React from 'react'
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Button } from '../app/components/Button/Button';

const meta = {
    component: Button,
    tags: ['!autodocs'],
  } satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Primary: Story = {
    args: {
        children: 'Primary Button', 
        variant: 'primary',         
        onClick: () => alert('Clicked!'),
    },
  };

export const Secondary: Story = {
    args: {
        children: 'Secondary Button', 
        variant: 'secondary',         
        onClick: () => alert('Clicked!'),
    },
  };