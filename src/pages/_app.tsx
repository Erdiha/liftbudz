import NavbarComponent from '@/components/navbar/NavbarComponent';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { AuthProvider } from '@/firebase/usefirebaseUI';
import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import rootReducer from '../redux/reducers';
const store = configureStore({ reducer: rootReducer });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {' '}
      <AuthProvider>
        <Provider store={store}>
          <NavbarComponent />
          <ToastContainer />
          <Component {...pageProps} />
        </Provider>
      </AuthProvider>
    </>
  );
}
