import { create } from "zustand";
import { persist } from 'zustand/middleware';

import { BookDetailStateType } from "@/types";

export const bookDetailStore = create<BookDetailStateType>()(
  persist<BookDetailStateType>(
    set => ({
      book: undefined,
      timeStamp: '',
      replaceBook: (book) => set({ book, timeStamp: new Date().toISOString() })
    }),
    {
      name: 'book-detail-storage'
    }
  )
);