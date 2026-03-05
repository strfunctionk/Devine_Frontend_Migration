import type { Meta, StoryObj } from '@storybook/nextjs';
import FilterButton from './FilterButton';

const meta = {
  component: FilterButton,
  tags: ['autodocs'],
  args: {
    label: '저장',
  },
} satisfies Meta<typeof FilterButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Save: Story = {
  args: {
    label: '저장',
    className: 'bg-primary text-white hover:bg-primary/80 transition-colors',
  },
};

export const Reset: Story = {
  args: {
    label: '초기화',
    className: 'bg-ui-50 text-ui-500 hover:bg-ui-100 transition-colors',
  },
};
