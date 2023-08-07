'use client';
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { BookParamsType, BookType } from "@/types";
import FavButton from "@/components/FavButton";
import fetchAPI from "@/libraries/api";
import endpoints from "@/configs/endpoints";
import { bookDetailStore } from "@/store/bookDetailState";
import { bookFavStore } from "@/store/booksFav";
import formatDateString from "@/libraries/formatDate";

export default function BookPage(props: BookParamsType) {
  const { back } = useRouter();
  const bookDetailCacheState = bookDetailStore();
  const bookFavState = bookFavStore();

  const [isFav, setIsFav] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(true);
  const [book, setBook] = useState<BookType>();

  useEffect(() => {
    shouldGetNewBooks();
  }, []);

  function toggleFav(id: number, status: boolean) {
    bookFavState.toggleFav(id, status);
  }

  function shouldGetNewBooks() {
    const lastCached = new Date(bookDetailCacheState.timeStamp ?? '');
    lastCached.setTime(lastCached.getTime() + (1 * 60 * 60 * 1000));

    if (
      !bookDetailCacheState.timeStamp ||
      bookDetailCacheState.book?.id !== +props.params.bookId ||
      new Date() > lastCached
    ) {
      const { booksId } = endpoints;
      fetchAPI<BookType>({ ...booksId, url: `${ booksId.url }${ props.params.bookId }` })
        .then(res => {
          setBook(res);
          bookDetailCacheState.replaceBook(res);
          setIsLoading(false);
        })
        .catch(err => {
          setIsLoading(false);
          console.warn(err);
        });
      console.log('Invalid cache or newly open');
    } else {
      console.log('loaded from cache');
      setBook(bookDetailCacheState.book);
    }
  }

  return (
    <main className="book">
      <div>
        <img src={ book?.cover } alt={ book?.title } />
      </div>
      <div>
        <img src={ book?.cover } alt={ book?.title } />
      </div>
      <div>
        <div className="back-btn" onClick={ () => back() }>
          <p>
            { "< Back" }
          </p>
        </div>
        <p className="font-xl">{ book?.title }</p>
        <p className="font-l">{ book?.description }</p>
        <p className="font-m">{ book?.author }</p>
        <p className="font-m">{ formatDateString(book?.publicationDate ?? '') }</p>
        <FavButton
          status={ !!bookFavState.books.find(v => v === book?.id) }
          onClick={ () => book?.id && toggleFav(book?.id, !isFav) }
        />
      </div>
    </main>
  );
}
