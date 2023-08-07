'use client';
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { BookType } from "@/types";
import fetchAPI from "@/libraries/api";
import endpoints from "@/configs/endpoints";
import BookCard from "@/components/BookCard";
import cutDescription from "@/libraries/cutDescription";
import formatDateString from "@/libraries/formatDate";
import PaginationNumber from "@/components/Pagination";
import { bookStore } from "@/store/booksStore";
import { bookFavStore } from "@/store/booksFav";

export default function BooksPage() {
  const { push } = useRouter();
  const bookCacheState = bookStore();
  const bookFavState = bookFavStore();

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState(true);
  const [datas, setDatas] = useState<BookType[]>([]);

  useEffect(() => {
    shouldGetNewBooks();
  }, []);

  function toggleFav(status: boolean, id: number) {
    bookFavState.toggleFav(id, status);
  }

  function shouldGetNewBooks() {
    const lastCached = new Date(bookCacheState.timeStamp ?? '');
    lastCached.setTime(lastCached.getTime() + (1 * 60 * 60 * 1000));

    if (!bookCacheState.timeStamp || new Date() > lastCached) {
      const { books } = endpoints;
      fetchAPI<BookType[]>({ ...books })
        .then(res => {
          setDatas(res);
          bookCacheState.replaceBooks(res);
          setIsLoading(false);
        })
        .catch(err => {
          setIsLoading(false);
          console.warn(err);
        });
      console.log('Invalid cache or newly open');
    } else {
      console.log('loaded from cache');
      setDatas(bookCacheState.books);
    }
  }

  const pageToShow = 5;
  let totalPage = Math.ceil(datas.length / pageToShow);
  let dataToShow = datas.slice((pageToShow * currentPage) - pageToShow, pageToShow * currentPage);
  const maxPageNumberShown = 5;

  return (
    <main className="standard-page books">
      <section>
        <div style={ { display: 'flex', flexDirection: 'column', gap: '10px' } }>
          {
            dataToShow.map(data => (
              <BookCard
                key={ data.id }
                { ...data }
                description={ cutDescription(data.description) }
                publicationDate={ formatDateString(data.publicationDate) }
                isFav={ bookFavState.books.indexOf(data.id) >= 0 }
                onFavToggle={ status => toggleFav(status, data.id) }
                onClick={ () => push(`/book/${ data.id }`) }
              />
            ))
          }
        </div>
        <div>
          <PaginationNumber
            totalPage={ totalPage }
            currentPage={ currentPage }
            shownPageNumber={ maxPageNumberShown > totalPage ? totalPage : maxPageNumberShown }
            onItemClick={ page => setCurrentPage(page) }
          />
        </div>
      </section>
    </main>
  );
}
