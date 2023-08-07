import { create } from "zustand";
import { persist } from 'zustand/middleware';

import { DarkThemeStateType } from "@/types";

export const darkThemeStore = create<DarkThemeStateType>()(
  persist<DarkThemeStateType>(
    set => ({
      isDark: true,
      setIsDark: (status) => set({ isDark: status }),
    }),
    {
      name: 'theme-storage'
    }
  )
);