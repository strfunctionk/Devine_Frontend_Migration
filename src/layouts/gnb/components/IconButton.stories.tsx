import type { Meta, StoryObj } from "@storybook/nextjs";
import IconButton from "./IconButton";

const meta = {
  component: IconButton,
  tags: ["autodocs"],
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

const SampleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width="18" height="18" rx="8" />
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
