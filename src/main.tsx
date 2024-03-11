import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import '../styles/global.scss';

import { BrowserRouter } from 'react-router-dom';
import { FavouriteContextProvider } from './context/FavouritesContext';

async function enableMocking() {
  // if (process.env.NODE_ENV !== 'development') {
  //   return;
  // }

  const { worker } = await import('./__mocks__/browser');

  console.log('ENV', process.env.NODE_ENV);

  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start({
    serviceWorker: {
      url:
        process.env.NODE_ENV !== 'development'
          ? '/staybae-ui/mockServiceWorker.js'
          : '/mockServiceWorker.js',
    },
    onUnhandledRequest: 'bypass',
  });
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <FavouriteContextProvider>
        <BrowserRouter
          basename={
            process.env.NODE_ENV !== 'development' ? '/staybae-ui/' : '/'
          }>
          <App />
        </BrowserRouter>
      </FavouriteContextProvider>
    </React.StrictMode>,
  );
});
