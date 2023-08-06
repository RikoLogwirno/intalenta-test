'use client';
import { useState } from "react";

import { BookParamsType } from "@/types";
import FavButton from "@/components/FavButton";

const sampleData = {
  id: 1,
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  description: "A classic of modern American literature that has been celebrated for its finely crafted characters and brilliant storytelling.",
  cover: "https://m.media-amazon.com/images/I/51IXWZzlgSL._SX330_BO1,204,203,200_.jpg",
  publicationDate: "1960-07-11T00:00:00.000Z"
};

export default function BookPage(props: BookParamsType) {
  const [isFav, setIsFav] = useState<boolean>(false);

  return (
    <main className="book">
      <div>
        <img src={ sampleData.cover } alt={ sampleData.title } />
      </div>
      <div>
        <img src={ sampleData.cover } alt={ sampleData.title } />
      </div>
      <div>
        <p className="font-xl">{ sampleData.title }</p>
        <p className="font-l">{ sampleData.description }</p>
        <p className="font-m">{ sampleData.author }</p>
        <p className="font-m">{ sampleData.publicationDate }</p>
        <FavButton status={ isFav } onClick={ () => setIsFav(!isFav) } />
      </div>
    </main>
  );
}
