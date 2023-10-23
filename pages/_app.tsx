import React from "react";

import { AppProps } from "next/app";
import Head from "next/head"

import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../store';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

const MyApp:React.FC<AppProps> = ({ Component, pageProps  }) => {
  return(
    <React.Fragment>
      <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
          <Head>
            <title>OneBitGame</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          </Head>

          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </React.Fragment>
  )
}

export default MyApp
