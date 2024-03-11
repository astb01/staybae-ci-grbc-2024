import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import '../styles/global.scss';

import { BrowserRouter } from 'react-router-dom';
import { FavouriteContextProvider } from './context/FavouritesContext';

const siteBaseName =
  process.env.NODE_ENV !== 'development' ? '/staybae-ci-grbc-2024/' : '/';

const mockWorkerUrl =
  process.env.NODE_ENV !== 'development'
    ? '/staybae-ci-grbc-2024/mockServiceWorker.js'
    : '/mockServiceWorker.js';

async function enableMocking() {
  // if (process.env.NODE_ENV !== 'development') {
  //   return;
  // }

  const { worker } = await import('./__mocks__/browser');

  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start({
    serviceWorker: {
      url: mockWorkerUrl,
    },
    onUnhandledRequest: 'bypass',
  });
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <FavouriteContextProvider>
        <BrowserRouter basename={siteBaseName}>
          <App />
        </BrowserRouter>
      </FavouriteContextProvider>
    </React.StrictMode>,
  );
});
