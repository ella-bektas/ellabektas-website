import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import TabItem from '../app/components/TabItem/TabItem';

const meta = {
  title: 'Components/Tabs/TabItem',
  component: TabItem,
  tags: ['!autodocs'],
} satisfies Meta<typeof TabItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: 'Tab item',
    isActive: true,
    onClick: () => alert('Clicked!'),
  },
};
