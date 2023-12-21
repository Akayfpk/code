import React from 'react';
import { AnimatePresence } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.css'; // Import Bootstrap CSS
import '../styles/globals.css'; // Keep your custom CSS import below Bootstrap to override default styles

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence mode='wait'>
      <Component {...pageProps} key={router.route} />
    </AnimatePresence>
  );
}

export default MyApp;