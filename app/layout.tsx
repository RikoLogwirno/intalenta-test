'use client';
import { RecoilRoot } from 'recoil';

import '@/styles/main.scss';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RecoilRoot>
      { children }
    </RecoilRoot>
  );
}
