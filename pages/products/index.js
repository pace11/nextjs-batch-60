import MainLayout from '@/layout/main';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Products() {
  const router = useRouter();

  console.log('router => ', router);

  const dummyProducts = [
    {
      id: 1,
      name: 'Sepatu',
    },
    {
      id: 2,
      name: 'Buku',
    },
    {
      id: 3,
      name: 'Tas',
    },
  ];

  return (
    <MainLayout>
      <ul>
        {dummyProducts?.map((item) => (
          <li key={item.id}>
            <Link href={`/products/${item.id}`}>{item?.name}</Link>
          </li>
        ))}
      </ul>
    </MainLayout>
  );
}
