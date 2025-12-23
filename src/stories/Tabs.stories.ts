// Tabs.stories.ts
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Tabs from '@/app/components/Tabs/Tabs';
import { Icons } from '@/app/icons';
import type { TabItemProps } from '@/app/components/TabItem/TabItem';

const meta = {
  title: 'Components/Tabs/TabGroup', // Changed title to avoid conflicts with TabItem
  component: Tabs,
  tags: ['!autodocs'],
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Active: Story = {
  args: {
    tabs: [
      {
        title: 'Home',
        state: 'active',
        onClick: () => alert('Clicked Tab 1!'),
        iconLeft: 'Home',
      } as TabItemProps,
      {
        title: 'About',
        state: 'inactive',
        onClick: () => alert('Clicked Tab 2!'),
        iconLeft: 'None',
      } as TabItemProps,
      {
        title: 'Contact',
        state: 'inactive',
        onClick: () => alert('Clicked Tab 3!'),
        iconLeft: 'None',
      } as TabItemProps,
    ],
  },
};
