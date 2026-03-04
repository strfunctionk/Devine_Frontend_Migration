import type { Meta, StoryObj } from "@storybook/nextjs";
import TextButton from "./TextButton";

const meta = {
  component: TextButton,
  tags: ["autodocs"],
  args: {
    label: "리포트",
    href: "#",
    isActive: false,
    underline: false,
  },
} satisfies Meta<typeof TextButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { label: "내 정보" },
};

export const Active: Story = {
  args: { isActive: true },
};

export const WithUnderline: Story = {
  args: { underline: true },
};

export const WithUnderlineActive: Story = {
  args: { underline: true, isActive: true },
};
