"use client";

import { useState } from "react";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import AuthButton from "./components/AuthButton";
import LogoButton from "./components/LogoButton";
import ModeButton from "./components/ModeButton";
import NotificationButton from "./components/NotificationButton";
import ProjectRegisterButton from "./components/ProjectRegisterButton";
import TextButton from "./components/TextButton";
import MenuButton from "./components/MenuButton";
import Sidebar from "@/layouts/sidebar/Sidebar";

// TODO : Nav 메뉴는 추후에 라우팅이 확정되면 Link 컴포넌트로 변경
const Gnb = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <>
      <header className="flex items-center bg-ui-bg w-full h-80pxr px-24pxr phone:px-48pxr tablet:px-80pxr justify-between">
        {/* 좌측 로고 및 Nav 메뉴 영역 */}
        <div className="flex items-center gap-36pxr">
          {/* 로고 */}
          <LogoButton logoClassName="h-36pxr w-auto" />
          {/* 데스크탑, 태블릿 상태일 때 Nav 메뉴 선택 */}
          <div className="flex items-center gap-20pxr max-tablet:hidden">
            <TextButton href="" label="프로젝트/개발자 보기" underline />
            <TextButton href="" label="추천 프로젝트/개발자" underline />
            <TextButton href="" label="리포트" underline />
            <TextButton href="" label="지원현황" underline />
          </div>
        </div>
        {/* 우측 버튼 영역 */}
        <div className="flex items-center gap-16pxr shrink-0">
          {/* 프로젝트 등록 버튼 - 로그인 시에만 노출 */}
          <SignedIn>
            <ProjectRegisterButton
              href=""
              label="프로젝트 등록하기"
              className="max-phone:hidden"
            />
          </SignedIn>
          {/* 다크/라이트 모드 토글 버튼*/}
          <ModeButton />
          {/* 알림 버튼 - TODO: API 연결 시 useNotificationStore로 상태 관리 */}
          <NotificationButton />
          {/* 로그인 상태에 따라 전환 */}
          <SignedOut>
            <AuthButton href="" label="회원가입/로그인" />
          </SignedOut>
          <SignedIn>
            <TextButton href="" label="내 정보" />
          </SignedIn>
          {/* 모바일 환경일 때 메뉴 버튼 */}
          <MenuButton
            isOpen={isSidebarOpen}
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="tablet:hidden"
          />
        </div>
      </header>

      {/* 모바일 사이드바 */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  );
};

export default Gnb;
