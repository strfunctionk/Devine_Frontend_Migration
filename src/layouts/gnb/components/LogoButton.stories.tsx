import type { Meta, StoryObj } from "@storybook/nextjs";
import DarkLogo from "@assets/icons/logo-dark.svg";
import LightLogo from "@assets/icons/logo-light.svg";
import MobileLogo from "@assets/icons/logo-mobile.svg";
import LogoButton from "./LogoButton";

const meta = {
  component: LogoButton,
  tags: ["autodocs"],
  args: {
    logoClassName: "h-32pxr w-auto",
  },
} satisfies Meta<typeof LogoButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DesktopDark: Story = {
  render: ({ logoClassName }) => <LightLogo className={logoClassName} />,
};

export const DesktopLight: Story = {
  render: ({ logoClassName }) => <DarkLogo className={logoClassName} />,
};

export const Mobile: Story = {
  render: ({ logoClassName }) => <MobileLogo className={logoClassName} />,
};
