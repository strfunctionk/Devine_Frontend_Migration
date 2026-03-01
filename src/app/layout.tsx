import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Providers from './providers';
import './globals.css';

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

export const metadata: Metadata = {
  title: 'DeVine',
  description: 'DeVine - Developer Networking Platform',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="ko" data-theme="dark" className={pretendard.variable}>
        <body>
          <Providers>{children}</Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
