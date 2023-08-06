'use client';
import { useState } from "react";

import BookCard from "@/components/BookCard";
import PaginationNumber from "@/components/Pagination";
import cutDescription from "@/libraries/cutDescription";
import formatDateString from "@/libraries/formatDate";

const randomDesc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In purus nisi, lobortis vitae turpis nec, suscipit luctus felis. Sed eleifend eleifend magna eget iaculis. Ut nulla lacus, commodo eget sapien eget, vestibulum scelerisque erat. Sed id ipsum eu purus fermentum iaculis. Nullam a arcu nec velit ultrices consectetur ac nec odio. Sed non mollis dui, sed auctor nisl. Donec interdum maximus mauris, pulvinar eleifend dolor aliquet eu. Vivamus dignissim, sem sed imperdiet mollis, metus sapien auctor mauris, ut tempor sapien ligula sed dolor. Quisque dolor leo, malesuada quis ante vel, tempor efficitur leo. Sed nec imperdiet neque. Curabitur at malesuada ex. Nunc eu feugiat arcu, eget gravida massa. Fusce tempus urna magna, eleifend posuere lorem vehicula ac. In vitae hendrerit diam. Praesent at mi nisi. Etiam ac mattis sapien. Nam elementum velit sapien, at laoreet justo convallis et. Morbi non mollis nibh. In efficitur sapien laoreet euismod laoreet. Aenean aliquet est ex, vel auctor metus venenatis id. Vestibulum consectetur erat lacinia viverra euismod. Mauris elementum sapien eu ultrices convallis. Cras nec augue vel justo ornare pulvinar vitae a odio. Morbi et enim nunc. Sed quis lorem ultricies, ullamcorper libero vel, rutrum magna. In consequat justo neque, sed consequat orci tempor sit amet. Donec nibh arcu, bibendum id nunc ac, venenatis rutrum augue. Etiam quam quam, hendrerit at sapien vel, ultricies aliquam ipsum. Aenean eleifend ipsum nec semper efficitur. In varius nibh dui, quis sollicitudin dolor iaculis eget.";
const randomDate = "1925-04-10T00:00:00.000Z";

export default function BooksPage() {
  const [currentPage, setCurrentPage] = useState<number>(1);

  return (
    <main className="standard-page books">
      <section>
        <div style={ { display: 'flex', flexDirection: 'column', gap: '10px' } }>
          <BookCard
            id={ 1 }
            title="Lorem"
            description={ cutDescription(randomDesc) }
            author="Riko Logwirno"
            publicationDate={ formatDateString(randomDate) }
            cover="https://m.media-amazon.com/images/I/41NssxNlPlS._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
          />
          <BookCard
            id={ 1 }
            title="Lorem"
            description={ cutDescription(randomDesc) }
            author="Riko Logwirno"
            publicationDate={ formatDateString(randomDate) }
            cover="https://m.media-amazon.com/images/I/41NssxNlPlS._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
          />
          <BookCard
            id={ 1 }
            title="Lorem"
            description={ cutDescription(randomDesc) }
            author="Riko Logwirno"
            publicationDate={ formatDateString(randomDate) }
            cover="https://m.media-amazon.com/images/I/41NssxNlPlS._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
          />
        </div>
        <div>
          <PaginationNumber totalPage={ 10 } currentPage={ currentPage } onItemClick={ page => setCurrentPage(page) } />
        </div>
      </section>
    </main>
  );
}
