import type { Metadata } from 'next';

import './globals.css';
import Footer from '@/components/footer';
import Header from '@/components/header';

export const metadata: Metadata = {
  title: '메추리알 - 메뉴 추천',
  description: '선택이 어려운 당신을 위해',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="ko">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
