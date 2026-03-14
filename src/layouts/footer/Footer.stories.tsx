import type { Meta, StoryObj } from "@storybook/nextjs";
import Footer from "./Footer";

const meta = {
  component: Footer,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "푸터 컴포넌트. 모바일(580px 미만)에서는 링크가 숨겨집니다. 뷰포트 크기를 변경하여 확인하세요.",
      },
    },
  },
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

/** 기본 상태 */
export const Default: Story = {};
