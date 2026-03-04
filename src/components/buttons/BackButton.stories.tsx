import type { Meta, StoryObj } from "@storybook/nextjs";
import BackButton from "./BackButton";

const meta = {
  component: BackButton,
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof BackButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
