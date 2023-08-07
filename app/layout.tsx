'use client';
import { useEffect, useState } from "react";
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import '@/styles/main.scss';
import { darkThemeStore } from '@/store/darkThemeStore';

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
  const [isDarkState, setIsDarkState] = useState(true);
  const { isDark } = darkThemeStore(state => state);

  useEffect(() => {
    setIsDarkState(isDark);
  }, [isDark]);


  return (
    <html lang="en" className={ isDarkState ? "dark" : "light" }>
      <body className={ inter.className }>{ children }</body>
    </html>
  );
}
