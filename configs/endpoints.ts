import { EndpointsType } from "@/types";

export default {
  books: {
    url: "books",
    options: {
      method: "GET"
    }
  },
  booksId: {
    url: "books/",
    options: {
      method: "GET"
    }
  }
} as EndpointsType;