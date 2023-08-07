import { create } from "zustand";
import { persist } from 'zustand/middleware';

import { BooksFavType } from "@/types";

export const bookFavStore = create<BooksFavType>()(
  persist<BooksFavType>(
    set => ({
      books: [],
      toggleFav: (id, status) => set((state: BooksFavType) => {
        if (state.books.find(v => v === id) && !status) {
          state.books.splice(state.books.indexOf(id), 1);
        } else {
          state.books.push(id);
        }

        return state;
      })
    }),
    {
      name: 'fav-storage'
    }
  )
);