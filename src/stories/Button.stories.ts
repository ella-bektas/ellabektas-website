import React from 'react'
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Button } from '../app/components/Button/Button';
import { Icons, IconName } from "@/app/icons";

const meta = {
    component: Button,
    tags: ['!autodocs'],
    argTypes: {
        iconLeft: {
            control: { type: 'select' },
            options: [null, ...Object.keys(Icons)],
        },
        iconRight: {
          control: { type: 'select' },
          options: [null, ...Object.keys(Icons)],
      },
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Primary: Story = {
    args: {
        children: 'Primary Button', 
        variant: 'primary',         
        onClick: () => alert('Clicked!'),
        iconLeft: 'None', 
    },
};

export const Secondary: Story = {
    args: {
        children: 'Secondary Button', 
        variant: 'secondary',         
        onClick: () => alert('Clicked!'),
        iconLeft: 'None',
    },
};

export const Tertiary: Story = {
    args: {
        children: 'Tertiary Button', 
        variant: 'tertiary',         
        onClick: () => alert('Clicked!'),
        iconLeft: 'None',
    },
};
