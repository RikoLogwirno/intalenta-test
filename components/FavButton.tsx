import Image from "next/image";

import { HeartCircle, HeartCircleOutline } from "@/assets";

type FavButtonTypes = {
  status: boolean;
};

export default function FavButton(props: FavButtonTypes) {
  return (
    <div className="fav-button">
      <Image src={ props.status ? HeartCircle : HeartCircleOutline } alt="Fav button" />
    </div>
  );
}
