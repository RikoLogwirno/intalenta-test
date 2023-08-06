import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import '@/styles/main.scss';

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
  return (
    <html lang="en" className="dark">
      <body className={ inter.className }>{ children }</body>
    </html>
  );
}
