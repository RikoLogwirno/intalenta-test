import { CardTypes } from "@/types";

export default function Card(props: CardTypes) {
  return (
    <div className="card" onClick={ props.onClick }>
      { props.children }
    </div>
  );
};