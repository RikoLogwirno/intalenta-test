'use client';
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { BookParamsType, BookType } from "@/types";
import FavButton from "@/components/FavButton";
import fetchAPI from "@/libraries/api";
import endpoints from "@/configs/endpoints";

export default function BookPage(props: BookParamsType) {
  const { back } = useRouter();

  const [isFav, setIsFav] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(true);
  const [book, setBook] = useState<BookType>();

  useEffect(() => {
    const { booksId } = endpoints;
    fetchAPI<BookType>({ ...booksId, url: `${ booksId.url }${ props.params.bookId }` })
      .then(res => {
        setBook(res);
        setIsLoading(false);
      })
      .catch(err => {
        setIsLoading(false);
        console.warn(err);
      });
  }, []);

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
        <p className="font-m">{ book?.publicationDate }</p>
        <FavButton status={ isFav } onClick={ () => setIsFav(!isFav) } />
      </div>
    </main>
  );
}
