import type { Meta, StoryObj } from "@storybook/nextjs";
import ModeButton from "./ModeButton";

const meta = {
  component: ModeButton,
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof ModeButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
