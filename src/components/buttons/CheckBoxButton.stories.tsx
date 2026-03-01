import type { Meta, StoryObj } from '@storybook/nextjs';
import { useState } from 'react';
import CheckBoxButton from './CheckBoxButton';

const meta = {
  component: CheckBoxButton,
  tags: ['autodocs'],
  args: {
    checked: false,
  },
} satisfies Meta<typeof CheckBoxButton>;

export default meta;
type Story = StoryObj<typeof meta>;

function InteractiveDemo({ checked: initial = false }: { checked?: boolean }) {
  const [checked, setChecked] = useState(initial);
  return <CheckBoxButton checked={checked} onChange={setChecked} aria-label="체크박스" />;
}

export const Default: Story = {
  render: () => <InteractiveDemo />,
};

export const Checked: Story = {
  render: () => <InteractiveDemo checked={true} />,
};
