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

  const pageToShow = 5;
  let totalPage = Math.ceil(datas.length / pageToShow);
  let dataToShow = datas.slice((pageToShow * currentPage) - pageToShow, pageToShow * currentPage);

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
              />
            ))
          }
        </div>
        <div>
          <PaginationNumber totalPage={ totalPage } currentPage={ currentPage } onItemClick={ page => setCurrentPage(page) } />
        </div>
      </section>
    </main>
  );
}
