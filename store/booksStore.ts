import { atom, selector } from "recoil";

import { BookType } from "@/types";

export interface BooksRecoilType {
  timestamp?: string;
  books?: BookType[];
}

export const bookState = atom<BooksRecoilType | false>({
  key: "books",
  default: false,
});

export const infoValue = selector({
  key: "infoValue",
  get: ({ get }) => ({
    cachedData: get(bookState)
  }),
});