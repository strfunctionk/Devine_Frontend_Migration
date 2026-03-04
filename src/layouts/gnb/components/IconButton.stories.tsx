import type { Meta, StoryObj } from "@storybook/nextjs";
import IconButton from "./IconButton";

const meta = {
  component: IconButton,
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

const SampleIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <rect width="18" height="18" rx="8" fill="#555555" />
  </svg>
);

export const Default: Story = {
  args: {
    icon: SampleIcon,
  },
};

export const NoHover: Story = {
  args: {
    icon: SampleIcon,
    hover: false,
  },
};
