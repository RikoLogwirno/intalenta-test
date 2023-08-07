'use client';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import '@/styles/main.scss';
import { darkThemeStore } from '@/store/darkThemeStore';
import { useSSRRecoil } from '@/libraries/useSSRRecoil';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Riko Logwrno | Intalenta test",
  description: "Build using next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isDark, setIsDark] = useSSRRecoil<boolean, boolean>(true, darkThemeStore);

  return (
    <html lang="en" className={ isDark ? "dark" : "light" }>
      <body className={ inter.className }>{ children }</body>
    </html>
  );
}
