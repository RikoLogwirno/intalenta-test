'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function HomePage() {
  const [isDark, setIsDark] = useState<boolean>(true);

  return (
    <main className="main">
      <div className="description">
        <p>
          Intalenta books test by Riko Logwirno
        </p>
        <p className="pointer" onClick={ () => setIsDark(!isDark) }>{ isDark ? "Dark" : "Light" }</p>
      </div>

      <div className="center">
        <p>Build using</p>
        <Image
          className="logo"
          src="/next.svg"
          alt="Next.js Logo"
          width={ 180 }
          height={ 37 }
          priority
        />
      </div>

      <div className="grid">
        <a
          href="/books"
          className="card"
        >
          <h2>
            Book List <span>-&gt;</span>
          </h2>
          <p>Click here to see book list and book detail for test</p>
        </a>
        <a
          href="https://rikologwirno.github.io"
          className="card"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            My Profile <span>-&gt;</span>
          </h2>
          <p>Click here to preview my Profile on github page</p>
        </a>
      </div>
    </main>
  );
}
