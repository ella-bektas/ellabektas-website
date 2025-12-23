// Tabs.stories.ts
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Tabs from '@/app/components/Tab/Tabs';
import { Icons } from '@/app/icons';
import type { TabItemProps } from '@/app/components/TabItem/TabItem';

const meta = {
  title: 'Molecules/Tabs', // Changed title to avoid conflicts with TabItem
  component: Tabs,
  tags: ['!autodocs'],
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Active: Story = {
  args: {
    tabs: [
      {
        title: 'Tab 1',
        state: 'active',
        onClick: () => alert('Clicked Tab 1!'),
        iconLeft: 'None',
      } as TabItemProps,
      {
        title: 'Tab 2',
        state: 'inactive',
        onClick: () => alert('Clicked Tab 2!'),
        iconLeft: 'None',
      } as TabItemProps,
    ],
  },
};
