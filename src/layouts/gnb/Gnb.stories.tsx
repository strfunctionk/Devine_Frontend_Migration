import type { Meta, StoryObj } from "@storybook/nextjs";
import { useState } from "react";
import AuthButton from "./components/AuthButton";
import LogoButton from "./components/LogoButton";
import ModeButton from "./components/ModeButton";
import NotificationButton from "./components/NotificationButton";
import ProjectRegisterButton from "./components/ProjectRegisterButton";
import TextButton from "./components/TextButton";
import MenuButton from "./components/MenuButton";
import Sidebar from "@/layouts/sidebar/Sidebar";
import Gnb from "./Gnb";

const meta = {
  component: Gnb,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Gnb>;

export default meta;
type Story = StoryObj<typeof meta>;

/** 비로그인 상태 */
const LoggedOutWrapper = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <header className="flex items-center bg-ui-bg w-full h-80pxr px-24pxr phone:px-48pxr tablet:px-80pxr justify-between">
        <div className="flex items-center gap-36pxr">
          <LogoButton logoClassName="h-36pxr w-auto" />
          <div className="flex items-center gap-20pxr max-tablet:hidden">
            <TextButton href="" label="프로젝트/개발자 보기" underline />
            <TextButton href="" label="추천 프로젝트/개발자" underline />
            <TextButton href="" label="리포트" underline />
            <TextButton href="" label="지원현황" underline />
          </div>
        </div>
        <div className="flex items-center gap-16pxr shrink-0">
          <ModeButton />
          <NotificationButton />
          <AuthButton href="" label="회원가입/로그인" />
          <MenuButton
            isOpen={isSidebarOpen}
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="tablet:hidden"
          />
        </div>
      </header>
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        disableResponsive
        forceShowAuthContent={false}
      />
    </>
  );
};

export const LoggedOut: Story = {
  render: () => <LoggedOutWrapper />,
};

/** 로그인 상태 */
const LoggedInWrapper = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <header className="flex items-center bg-ui-bg w-full h-80pxr px-24pxr phone:px-48pxr tablet:px-80pxr justify-between">
        <div className="flex items-center gap-36pxr">
          <LogoButton logoClassName="h-36pxr w-auto" />
          <div className="flex items-center gap-20pxr max-tablet:hidden">
            <TextButton href="" label="프로젝트/개발자 보기" underline />
            <TextButton href="" label="추천 프로젝트/개발자" underline />
            <TextButton href="" label="리포트" underline />
            <TextButton href="" label="지원현황" underline />
          </div>
        </div>
        <div className="flex items-center gap-16pxr shrink-0">
          <ProjectRegisterButton href="" label="프로젝트 등록하기" className="max-phone:hidden" />
          <ModeButton />
          <NotificationButton />
          <TextButton href="" label="내 정보" />
          <MenuButton
            isOpen={isSidebarOpen}
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="tablet:hidden"
          />
        </div>
      </header>
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        disableResponsive
        forceShowAuthContent
      />
    </>
  );
};

export const LoggedIn: Story = {
  render: () => <LoggedInWrapper />,
};
