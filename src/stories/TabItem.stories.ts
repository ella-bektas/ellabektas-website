import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import TabItem from '../app/components/TabItem/TabItem';
import { Icons } from '@/app/icons';

const meta = {
  title: 'Components/Tabs/TabItem',
  component: TabItem,
  tags: ['!autodocs'],
  argTypes: {
    iconLeft: {
      control: { type: 'select' },
      options: ['None', ...Object.keys(Icons)],
    },
  },
} satisfies Meta<typeof TabItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: 'Tab item',
    state: 'active',
    onClick: () => alert('Clicked!'),
    iconLeft: 'None',
   
  },
};
