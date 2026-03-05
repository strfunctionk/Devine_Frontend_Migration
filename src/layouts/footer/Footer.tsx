import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center gap-28pxr w-full bg-ui-bg py-70pxr phone:py-44pxr">
      {/* 링크 */}
      <nav className="hidden phone:flex phone:items-center gap-x-32pxr mb-8pxr">
        <Link
          href="/terms/service"
          className="text-body1-md text-ui-600 transition-colors hover:text-ui-800">
          이용약관
        </Link>
        <div className="h-16pxr w-1pxr bg-ui-300" aria-hidden />
        <Link
          href="/terms/privacy"
          className="text-body1-md text-ui-600 transition-colors hover:text-ui-800">
          개인정보처리방침
        </Link>
        <div className="h-16pxr w-1pxr bg-ui-300" aria-hidden />
        <a
          href="https://groovy-ixora-43f.notion.site/DeVine-305b559ef26f803fb8f7c75f524ad35e"
          target="_blank"
          rel="noopener noreferrer"
          className="text-body1-md text-ui-600 transition-colors hover:text-ui-800">
          서비스 소개
        </a>
      </nav>

      {/* 연락처 및 저작권 */}
      <address className="flex-col-center gap-8pxr not-italic">
        <p className="text-label1-md text-ui-600">Contact</p>
        <p className="text-label1-md text-ui-600">
          Copyright Devine. All rights reserved
        </p>
      </address>
    </footer>
  );
};

export default Footer;
