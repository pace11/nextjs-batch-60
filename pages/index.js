import ProductCard from '@/components/product-card';
import ProductCardStateless from '@/components/product-card-stateless';
import styles from '@/styles/Home.module.css';
import localFont from 'next/font/local';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';

import MainLayout from '@/layout/main';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export default function Home() {
  const router = useRouter();
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <MainLayout>
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        <p>Ini materi hari ke-3</p>
        <main className={styles.main}>
          <Image
            className={styles.logo}
            src="https://nextjs.org/icons/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
          <ol>
            <li>
              Get started by editing <code>pages/index.js</code>.
            </li>
            <li>Save and see your changes instantly.</li>
          </ol>

          <div className="">
            <a
              className={styles.primary}
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles.logo}
                src="https://nextjs.org/icons/vercel.svg"
                alt="Vercel logomark"
                width={20}
                height={20}
              />
              Deploy now
            </a>
            <a
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondary}
            >
              Read our docs
            </a>
          </div>
        </main>
        <footer className={styles.footer}>
          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="https://nextjs.org/icons/file.svg"
              alt="File icon"
              width={16}
              height={16}
            />
            Learn
          </a>
          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="https://nextjs.org/icons/window.svg"
              alt="Window icon"
              width={16}
              height={16}
            />
            Examples
          </a>
          <a
            href="https://nextjs.org?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="https://nextjs.org/icons/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            Go to nextjs.org →
          </a>
        </footer>
        <div className="section-box">
          <p>Component Stateful</p>
          <hr />
          <ProductCard />
          <ProductCard />
          <br />
          <br />
          <br />
          <br />

          <p>Component Stateless</p>
          <hr />
          <ProductCardStateless
            count={count}
            setCount={() => setCount((count) => count + 10)}
          />
          <ProductCardStateless
            count={count2}
            setCount={() => setCount2((count2) => count2 + 20)}
          />
        </div>
      </div>
    </MainLayout>
  );
}
