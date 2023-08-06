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
};