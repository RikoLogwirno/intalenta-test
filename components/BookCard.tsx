import { BookCardTypes } from "@/types";

import Card from "./Card";
import FavButton from "./FavButton";

export default function BookCard(props: BookCardTypes) {
  return (
    <Card>
      <div className="book-card">
        <div className="cover">
          <img src={ props.cover } alt={ props.title } />
        </div>
        <div className="descriptions">
          <p className="font-l">{ props.title }</p>
          <p className="font-m">{ props.description }</p>
          <p className="font-s">{ props.author }</p>
          <p className="font-s">{ props.publicationDate }</p>
          <FavButton status={ false } />
        </div>
      </div>
    </Card>
  );
}