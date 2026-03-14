import type { Meta, StoryObj } from "@storybook/nextjs";
import NotificationButton from "./NotificationButton";

const meta = {
  component: NotificationButton,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div className="flex justify-end p-32pxr bg-ui-bg min-h-400pxr">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof NotificationButton>;

export default meta;
type Story = StoryObj<typeof meta>;

/** 읽지 않은 알림이 있는 상태 (빨간 점 표시) */
export const HasUnread: Story = {
  args: {
    hasUnread: true,
  },
};

/** 읽지 않은 알림이 없는 상태 */
export const NoUnread: Story = {
  args: {
    hasUnread: false,
  },
};
