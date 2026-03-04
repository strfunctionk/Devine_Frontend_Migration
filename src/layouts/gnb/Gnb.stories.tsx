import type { Meta, StoryObj } from "@storybook/nextjs";
import AuthButton from "./components/AuthButton";
import LogoButton from "./components/LogoButton";
import ModeButton from "./components/ModeButton";
import NotificationButton from "./components/NotificationButton";
import ProjectRegisterButton from "./components/ProjectRegisterButton";
import TextButton from "./components/TextButton";
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
export const LoggedOut: Story = {
  render: () => (
    <header className="flex items-center bg-ui-bg w-full h-80pxr px-80pxr gap-60pxr">
      <div className="flex items-center gap-36pxr">
        <LogoButton logoClassName="h-32pxr w-auto" />
        <div className="flex items-center gap-20pxr">
          <TextButton href="" label="프로젝트/개발자 보기" underline />
          <TextButton href="" label="추천 프로젝트/개발자" underline />
          <TextButton href="" label="리포트" underline />
          <TextButton href="" label="지원현황" underline />
        </div>
      </div>
      <div className="flex items-center gap-16pxr ml-auto">
        <ModeButton />
        <NotificationButton hasNotification={false} onClick={() => {}} />
        <AuthButton href="" label="회원가입/로그인" />
      </div>
    </header>
  ),
};

/** 로그인 상태 */
export const LoggedIn: Story = {
  render: () => (
    <header className="flex items-center bg-ui-bg w-full h-80pxr px-80pxr gap-60pxr">
      <div className="flex items-center gap-36pxr">
        <LogoButton logoClassName="h-32pxr w-auto" />
        <div className="flex items-center gap-20pxr">
          <TextButton href="" label="프로젝트/개발자 보기" underline />
          <TextButton href="" label="추천 프로젝트/개발자" underline />
          <TextButton href="" label="리포트" underline />
          <TextButton href="" label="지원현황" underline />
        </div>
      </div>
      <div className="flex items-center gap-16pxr ml-auto">
        <ProjectRegisterButton href="" label="프로젝트 등록하기" />
        <ModeButton />
        <NotificationButton hasNotification={true} onClick={() => {}} />
        <TextButton href="" label="내 정보" />
      </div>
    </header>
  ),
};
