import type { Meta, StoryObj } from '@storybook/nextjs';
import ProjectRegisterButton from './ProjectRegisterButton';

const meta = {
  component: ProjectRegisterButton,
  tags: ['autodocs'],
  args: {
    label: '프로젝트 등록하기',
  },
} satisfies Meta<typeof ProjectRegisterButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { label: '프로젝트 등록하기' },
};

export const Disabled: Story = {
  args: { label: '프로젝트 등록하기', disabled: true },
};
