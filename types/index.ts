export type BookCardTypes = {
  id: number;
  title: string;
  author: string;
  description: string;
  cover: string;
  publicationDate: string;
  isFav?: boolean;
  onFavToggle?: (status: boolean) => any;
  onClick?: () => any;
};

export type CardTypes = {
  children?: React.ReactElement | React.ReactElement[];
  onClick?: () => any;
};

export type FavButtonTypes = {
  status: boolean;
  onClick?: () => any;
};

export type PaginationNumberType = {
  totalPage: number;
  currentPage: number;
  shownPageNumber?: number;
  onItemClick?: (page: number) => any;
};

export type BookParamsType = {
  params: {
    bookId: string;
  };
};

export type EndpointsType = {
  [endpointName: string]: {
    url: string;
    options?: {
      method?: string;
    };
  };
};

export type BookType = {
  id: number;
  title: string;
  author: string;
  description: string;
  cover: string;
  publicationDate: string;
};

export type DarkThemeStateType = {
  isDark: boolean;
  setIsDark: (status: boolean) => void;
};

export type BooksStateType = {
  books: BookType[];
  timeStamp?: string;
  replaceBooks: (books: BookType[]) => void;
};

export type BookDetailStateType = {
  book?: BookType;
  timeStamp?: string;
  replaceBook: (books: BookType) => void;
};

export type BooksFavType = {
  books: number[];
  toggleFav: (id: number, status: boolean) => void;
};