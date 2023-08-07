'use client';
import { useState, useEffect } from "react";

import { BookType } from "@/types";
import fetchAPI from "@/libraries/api";
import endpoints from "@/configs/endpoints";
import BookCard from "@/components/BookCard";
import cutDescription from "@/libraries/cutDescription";
import formatDateString from "@/libraries/formatDate";
import PaginationNumber from "@/components/Pagination";

export default function BooksPage() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState(true);
  const [datas, setDatas] = useState<BookType[]>([]);
  const [favoritesId, setFavoritesId] = useState<number[]>([]);

  useEffect(() => {
    const { books } = endpoints;
    fetchAPI<BookType[]>({ ...books })
      .then(res => {
        setDatas(res);
        setIsLoading(false);
      })
      .catch(err => {
        setIsLoading(false);
        console.warn(err);
      });
  }, []);

  function toggleFav(status: boolean, id: number) {
    const favIds = [...favoritesId];
    if (favIds.find(v => v === id) && !status) {
      favIds.splice(favIds.indexOf(id), 1);
    } else {
      favIds.push(id);
    }
    setFavoritesId(favIds);
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
                isFav={ favoritesId.indexOf(data.id) >= 0 }
                onFavToggle={ status => toggleFav(status, data.id) }
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
