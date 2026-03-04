import type { Meta, StoryObj } from '@storybook/nextjs';
import Segment from './Segment';

const meta = {
  component: Segment,
  tags: ['autodocs'],
  args: {
    label: 'Segment',
    isActive: false,
  },
} satisfies Meta<typeof Segment>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Active: Story = {
  args: {
    label: 'Segment',
    isActive: true,
  },
};

export const Inactive: Story = {
  args: {
    label: 'Segment',
    isActive: false,
  },
};
