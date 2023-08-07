import { create } from "zustand";
import { persist } from 'zustand/middleware';

import { BooksStateType } from "@/types";

export const bookStore = create<BooksStateType>()(
  persist<BooksStateType>(
    set => ({
      books: [],
      timeStamp: '',
      replaceBooks: (books) => set({ books, timeStamp: new Date().toISOString() })
    }),
    {
      name: 'book-storage'
    }
  )
);