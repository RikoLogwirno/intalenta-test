export type BookCardTypes = {
  id: number;
  title: string;
  author: string;
  description: string;
  cover: string;
  publicationDate: string;
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