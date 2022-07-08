import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const PageNotFound: NextPage = () => (
  <>
    <Head>
      <title>Página no encontrada</title>
    </Head>

    <div className="page-placeholder">
      <Image
        src="/images/404.svg"
        alt="Página no encontrada"
        height="300px"
        width="300px"
      />
      <p>Página no encontrada</p>
    </div>
  </>
);

export default PageNotFound;
