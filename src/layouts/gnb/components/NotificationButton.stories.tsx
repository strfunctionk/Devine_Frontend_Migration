import type { Meta, StoryObj } from "@storybook/nextjs";
import NotificationButton from "./NotificationButton";

const meta = {
  component: NotificationButton,
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof NotificationButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const HasNotification: Story = {
  args: { hasNotification: true },
};
