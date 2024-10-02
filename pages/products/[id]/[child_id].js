import MainLayout from '@/layout/main';
import { useRouter } from 'next/router';

export default function ProductsDetailChildren() {
  const router = useRouter();

  const dummyProducts = [
    {
      id: 1,
      name: 'Sepatu',
      desc: 'ini adalah sepatu terbaik di dunia',
      children: [
        {
          id: 11,
          name: 'Sepatu Bola',
        },
        {
          id: 12,
          name: 'Sepatu Futsal',
        },
      ],
    },
    {
      id: 2,
      name: 'Buku',
      desc: 'buku ini adalah buku rahasia untuk menjadi orang terkenal',
      children: [
        {
          id: 21,
          name: 'Buku Belajar',
        },
        {
          id: 22,
          name: 'Buku Tulis',
        },
      ],
    },
    {
      id: 3,
      name: 'Tas',
      desc: 'tas yang anti air, anti copet, anti dari segalanya',
      children: [
        {
          id: 31,
          name: 'Tas Punggung',
        },
        {
          id: 32,
          name: 'Tas Jinjing',
        },
      ],
    },
  ];

  const detailProducts = dummyProducts?.find(
    (item) => item.id === Number(router?.query?.id ?? '0')
  );

  const detailChildren = detailProducts?.children?.find(
    (item) => item.id === Number(router?.query?.child_id ?? '0')
  );

  return (
    <MainLayout>
      <button onClick={() => router.back()}>Back</button>
      <p>Detail Product Children</p>
      <ul>
        <li>Nama: {detailProducts?.name}</li>
        <li>Desc: {detailProducts?.desc}</li>
        ------------------
        <li>Product Detail Child: {detailChildren?.name}</li>
      </ul>
    </MainLayout>
  );
}
