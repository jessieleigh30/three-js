import React from 'react';
import { AppProps } from 'next/app';
import { AnimatePresence } from 'framer-motion';
import Layout from '@components/Layout';
import { useRouter } from 'next/router';
import PageTransition from '@components/PageTransition';

import 'react-perfect-scrollbar/dist/css/styles.css';
import '@styles/index.css';

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  return (
    <Layout>
      <AnimatePresence exitBeforeEnter key="app_root">
        <PageTransition slug={router.route}>
          <Component {...pageProps} key={router.route} />
        </PageTransition>
      </AnimatePresence>
    </Layout>
  );
};

export default App;
