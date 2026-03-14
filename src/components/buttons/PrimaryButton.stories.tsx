import type { Meta, StoryObj } from '@storybook/nextjs';
import PrimaryButton from './PrimaryButton';

const meta = {
  component: PrimaryButton,
  tags: ['autodocs'],
  args: {
    label: '제안하기',
  },
} satisfies Meta<typeof PrimaryButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Propose: Story = {
  args: { label: '제안하기' },
};

export const Apply: Story = {
  args: { label: '지원하기' },
};

export const Register: Story = {
  args: { label: '등록하기' },
};

export const Disabled: Story = {
  args: { label: '제안하기', disabled: true },
};
