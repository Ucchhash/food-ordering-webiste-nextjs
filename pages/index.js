import Head from 'next/head';
import PizzaList from '../components/PizzaList';

export default function Home() {
  return (
    <>
      <Head>
        <title>Pizzaria</title>
        <meta name="description" content="Best Pizza Shop in Khulna" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PizzaList />
    </>
  );
}
