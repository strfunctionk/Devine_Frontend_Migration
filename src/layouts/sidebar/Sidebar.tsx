"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SignedIn } from "@clerk/nextjs";
import { cn } from "@/lib/cn";

// TODO: 페이지 생성 후 경로 수정
const navItems = [
  { path: "", label: "프로젝트/개발자 보기" },
  { path: "", label: "추천 프로젝트/개발자" },
  { path: "", label: "리포트" },
  { path: "", label: "지원 현황" },
];

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
  /** 테스트용 - tablet:hidden 비활성화 */
  disableResponsive?: boolean;
  /** 테스트용 - 로그인 콘텐츠 강제 표시 (ClerkProvider 없이 테스트) */
  forceShowAuthContent?: boolean;
};

const Sidebar = ({
  isOpen,
  onClose,
  disableResponsive = false,
  forceShowAuthContent = false,
}: SidebarProps) => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname?.startsWith(path);

  /* 프로젝트 등록 링크 */
  const projectRegisterLink = (
    <Link
      href=""
      onClick={onClose}
      className={cn(
        "text-title3-sb group relative inline-block py-4pxr font-bold text-primary transition-all duration-300 ease-out",
        isOpen ? "animate-slide-in-right" : "animate-slide-out-right",
      )}
      style={{
        animationDelay: isOpen ? "0ms" : `${navItems.length * 50}ms`,
        animationFillMode: "both",
      }}>
      {/* 호버 시 밑줄 애니메이션 */}
      <span className="relative inline-block">
        프로젝트 등록하기
        <span className="absolute bottom-2pxr left-0 h-1pxr w-0 bg-primary opacity-0 transition-all duration-300 ease-out group-hover:w-full group-hover:opacity-100" />
      </span>
    </Link>
  );

  return (
    /* 사이드바 컨테이너 */
    <div
      className={cn(
        "fixed inset-x-0 top-80pxr bottom-0 z-40 bg-ui-bg transition-opacity duration-300",
        { "tablet:hidden": !disableResponsive },
        isOpen
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0",
      )}>
      <div className="flex flex-col gap-60pxr px-40pxr pt-100pxr max-phone:px-20pxr">
        {/* 프로젝트 등록 링크 - 로그인 시에만 표시 */}
        {forceShowAuthContent === true && projectRegisterLink}
        {forceShowAuthContent === undefined && (
          <SignedIn>{projectRegisterLink}</SignedIn>
        )}
        {/* forceShowAuthContent === false: 아무것도 렌더링하지 않음 (로그아웃 테스트) */}

        {/* 네비게이션 메뉴 */}
        <nav className="flex flex-col gap-60pxr">
          {navItems.map((item, index) => {
            const totalItems = navItems.length;
            const reverseIndex = totalItems - 1 - index;
            return (
              <Link
                key={item.label}
                href={item.path}
                onClick={onClose}
                className={cn(
                  "text-title3-sb group relative inline-block py-4pxr font-bold text-ui-700 transition-all duration-300 ease-out hover:text-ui-800",
                  isOpen ? "animate-slide-in-right" : "animate-slide-out-right",
                  { "text-ui-800": item.path && isActive(item.path) },
                )}
                style={{
                  /* 열릴 때: 순차적 등장 / 닫힐 때: 역순 퇴장 */
                  animationDelay: isOpen
                    ? `${(index + 1) * 100}ms`
                    : `${reverseIndex * 50}ms`,
                  animationFillMode: "both",
                }}>
                {/* 호버 시 밑줄 애니메이션 */}
                <span className="relative inline-block">
                  {item.label}
                  <span className="absolute bottom-2pxr left-0 h-1pxr w-0 bg-ui-800 opacity-0 transition-all duration-300 ease-out group-hover:w-full group-hover:opacity-100" />
                </span>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
