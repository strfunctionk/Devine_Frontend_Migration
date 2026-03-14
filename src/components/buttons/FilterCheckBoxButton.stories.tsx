import type { Meta, StoryObj } from "@storybook/nextjs";
import { useState } from "react";
import FilterCheckBoxButton from "./FilterCheckBoxButton";

const meta = {
  component: FilterCheckBoxButton,
  tags: ["autodocs"],
  args: {
    checked: false,
  },
} satisfies Meta<typeof FilterCheckBoxButton>;

export default meta;
type Story = StoryObj<typeof meta>;

function InteractiveDemo({ checked: initial = false }: { checked?: boolean }) {
  const [checked, setChecked] = useState(initial);
  return (
    <FilterCheckBoxButton
      checked={checked}
      onChange={setChecked}
      aria-label="체크박스"
    />
  );
}

export const Default: Story = {
  render: () => <InteractiveDemo />,
};

export const Checked: Story = {
  render: () => <InteractiveDemo checked={true} />,
};
