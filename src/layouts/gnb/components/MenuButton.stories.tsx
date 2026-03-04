import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs";
import MenuButton from "./MenuButton";

const meta = {
  component: MenuButton,
  tags: ["autodocs"],
} satisfies Meta<typeof MenuButton>;

export default meta;
type Story = StoryObj<typeof meta>;

const MenuButtonToggle = () => {
  const [isOpen, setIsOpen] = useState(false);
  return <MenuButton isOpen={isOpen} onClick={() => setIsOpen((prev) => !prev)} />;
};

export const Default: Story = {
  render: () => <MenuButtonToggle />,
};

export const Open: Story = {
  args: {
    isOpen: true,
  },
};

export const Closed: Story = {
  args: {
    isOpen: false,
  },
};
