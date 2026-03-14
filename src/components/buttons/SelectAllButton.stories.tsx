import type { Meta, StoryObj } from "@storybook/nextjs";
import { useState } from "react";
import SelectAllButton from "./SelectAllButton";

const InteractiveSelectAllButton = (
  args: React.ComponentProps<typeof SelectAllButton>,
) => {
  const [selected, setSelected] = useState(args.selected ?? false);
  return (
    <SelectAllButton
      {...args}
      selected={selected}
      onClick={() => setSelected((prev) => !prev)}
    />
  );
};

const meta = {
  component: SelectAllButton,
  tags: ["autodocs"],
  render: (args: React.ComponentProps<typeof SelectAllButton>) => (
    <InteractiveSelectAllButton {...args} />
  ),
} satisfies Meta<typeof SelectAllButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const InitialSelected: Story = {
  args: { selected: true },
};
