import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Home: NextPage = () => (
  <>
    <Head>
      <title>Meli Challenge</title>
      <meta name="description" content="Challenge for Meli" />
    </Head>

    <div className="page-placeholder">
      <Image
        src="/images/placeholder-home.svg"
        alt="Buscar articulos"
        height="300px"
        width="300px"
      />
    </div>
  </>
);

export default Home;
