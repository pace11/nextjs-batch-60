import MainLayout from '@/layout/main';
import { useRouter } from 'next/router';

export default function About() {
  const router = useRouter();

  console.log('router => ', router);
  return (
    <MainLayout>
      <p>About</p>
    </MainLayout>
  );
}
