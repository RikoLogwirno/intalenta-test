import Image from "next/image";

import { FavButtonTypes } from "@/types";
import { HeartCircle, HeartCircleOutline } from "@/assets";

export default function FavButton(props: FavButtonTypes) {
  return (
    <div className="fav-button">
      <Image src={ props.status ? HeartCircle : HeartCircleOutline } alt="Fav button" />
    </div>
  );
}
