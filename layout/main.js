import Head from 'next/head';
import { useRouter } from 'next/router';

export default function MainLayout({
  children,
  metaTitle = '',
  metaDescription = '',
}) {
  const router = useRouter();
  const isRenderFooter = ['/about', '/contact', '/member'].includes(
    router.pathname
  );

  return (
    <>
      <Head>
        <title>{`${metaTitle ? metaTitle : `Create Next App ${String(router.pathname).replace('/', '')}`}`}</title>
        <meta
          name="description"
          content={`${metaDescription ? metaDescription : `Generated by create next app ${String(router.pathname).replace('/', '')}`}`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>Header</div>
      <div>{children}</div>
      {isRenderFooter && <div>Footer</div>}
    </>
  );
}
