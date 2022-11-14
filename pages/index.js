import Head from 'next/head';
import Header from '../components/Header';

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Instagram</title>
        <meta
          name="description"
          content="Create an account or log in to Instagram - A simple, fun & creative way to capture, edit & share photos, videos & messages with friends & family."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
    </div>
  );
}
