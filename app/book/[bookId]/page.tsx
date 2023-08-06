import { BookParamsType } from "@/types";

export default function Book(props: BookParamsType) {
  return (
    <div>Book { props.params.bookId }</div>
  );
}
