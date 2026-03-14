import type { Meta, StoryObj } from '@storybook/nextjs';
import { useState } from 'react';
import LockToggleButton from './LockToggleButton';

const meta = {
  component: LockToggleButton,
  tags: ['autodocs'],
  args: {
    isOn: false,
    onChange: () => {},
  },
} satisfies Meta<typeof LockToggleButton>;

export default meta;
type Story = StoryObj<typeof meta>;

function InteractiveDemo({ isOn: initial = false }: { isOn?: boolean }) {
  const [isOn, setIsOn] = useState(initial);
  return <LockToggleButton isOn={isOn} onChange={() => setIsOn((prev) => !prev)} />;
}

export const Default: Story = {
  render: () => <InteractiveDemo />,
};

export const On: Story = {
  render: () => <InteractiveDemo isOn={true} />,
};
