import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Tabs from '@/app/components/Tabs/Tabs';
import type { TabItemProps } from '@/app/components/TabItem/TabItem';

const meta = {
  title: 'Components/Tabs/TabGroup',
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
        href: '/',
        onClick: () => alert('Clicked Tab 1!'),
        iconLeft: 'HomeOutline',
      },
      {
        title: 'About',
        href: '/about',
        onClick: () => alert('Clicked Tab 2!'),
        iconLeft: undefined, // no icon
      },
      {
        title: 'Contact',
        href: '/contact',
        onClick: () => alert('Clicked Tab 3!'),
        iconLeft: undefined,
      },
    ],
  },
};
