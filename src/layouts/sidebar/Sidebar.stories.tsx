import type { Meta, StoryObj } from "@storybook/nextjs";
import { useState } from "react";
import Sidebar from "./Sidebar";

const meta = {
  component: Sidebar,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "모바일 사이드바 컴포넌트. 태블릿(1080px) 미만에서만 표시됩니다. 스토리북에서는 disableResponsive로 항상 표시합니다.",
      },
    },
  },
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof Sidebar>;

const SidebarWrapper = ({ forceShowAuthContent = true }: { forceShowAuthContent?: boolean }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="min-h-screen bg-ui-bg">
      <div className="h-80pxr flex items-center justify-end px-20pxr border-b border-ui-200">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="px-16pxr py-8pxr bg-ui-100 rounded-lg text-ui-800"
        >
          {isOpen ? "닫기" : "열기"}
        </button>
      </div>
      <Sidebar
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        disableResponsive
        forceShowAuthContent={forceShowAuthContent}
      />
    </div>
  );
};

/** 로그인 상태 - 프로젝트 등록하기 표시 */
export const LoggedIn: Story = {
  render: () => <SidebarWrapper forceShowAuthContent />,
};

/** 로그아웃 상태 - 프로젝트 등록하기 숨김 */
export const LoggedOut: Story = {
  render: () => <SidebarWrapper forceShowAuthContent={false} />,
};
