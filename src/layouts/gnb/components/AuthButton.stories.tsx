import type { Meta, StoryObj } from "@storybook/nextjs";
import AuthButton from "./AuthButton";

const meta = {
  component: AuthButton,
  tags: ["autodocs"],
  args: {
    label: "회원가입/로그인",
    href: "/login",
  },
} satisfies Meta<typeof AuthButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Dark: Story = {
  decorators: [
    (Story) => {
      document.documentElement.setAttribute("data-theme", "dark");
      return <Story />;
    },
  ],
};

export const Light: Story = {
  decorators: [
    (Story) => {
      document.documentElement.setAttribute("data-theme", "light");
      return <Story />;
    },
  ],
};
