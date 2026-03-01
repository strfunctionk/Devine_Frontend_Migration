import type { Meta, StoryObj } from '@storybook/nextjs';
import { useState } from 'react';
import ToggleButton from './ToggleButton';

const meta = {
  component: ToggleButton,
  tags: ['autodocs'],
  args: {
    isOn: false,
    onChange: () => {},
  },
} satisfies Meta<typeof ToggleButton>;

export default meta;
type Story = StoryObj<typeof meta>;

function InteractiveDemo({ isOn: initial = false }: { isOn?: boolean }) {
  const [isOn, setIsOn] = useState(initial);
  return <ToggleButton isOn={isOn} onChange={() => setIsOn((prev) => !prev)} />;
}

export const Default: Story = {
  render: () => <InteractiveDemo />,
};

export const On: Story = {
  render: () => <InteractiveDemo isOn={true} />,
};
