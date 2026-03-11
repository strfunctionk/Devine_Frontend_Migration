import type { Metadata } from 'next';
import type { Viewport } from 'next';
import localFont from 'next/font/local';
import Providers from './providers';
import '../styles/globals.css';

const pretendard = localFont({
  src: [
    { path: '../styles/fonts/Pretendard-Thin.woff2', weight: '100' },
    { path: '../styles/fonts/Pretendard-ExtraLight.woff2', weight: '200' },
    { path: '../styles/fonts/Pretendard-Light.woff2', weight: '300' },
    { path: '../styles/fonts/Pretendard-Regular.woff2', weight: '400' },
    { path: '../styles/fonts/Pretendard-Medium.woff2', weight: '500' },
    { path: '../styles/fonts/Pretendard-SemiBold.woff2', weight: '600' },
    { path: '../styles/fonts/Pretendard-Bold.woff2', weight: '700' },
    { path: '../styles/fonts/Pretendard-ExtraBold.woff2', weight: '800' },
    { path: '../styles/fonts/Pretendard-Black.woff2', weight: '900' },
  ],
  variable: '--font-pretendard',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:5174'),
  title: {
    default: 'DeVine',
    template: '%s | DeVine',
  },
  description: '개발자와 프로젝트를 연결하는 플랫폼, DeVine',
  openGraph: {
    type: 'website',
    siteName: 'DeVine',
    title: 'DeVine',
    description: '개발자와 프로젝트를 연결하는 플랫폼, DeVine',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={pretendard.variable} suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
