import { FunctionComponent } from 'react';
import type { AppProps } from 'next/app';
import { Navbar } from 'components/navbar';
import 'styles/globals.scss';

const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => (
  <div className="container">
    <Navbar />
    <div className="content">
      <Component {...pageProps} />
    </div>
  </div>
);

export default App;
