import { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Layout from './components/layout/Layout';
import ProgressBar from '@badrap/bar-of-progress';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

// pages
import Home from 'src/pages/home/Home';
import PropertyDetails from 'src/pages/details/PropertyDetails';
import Search from 'src/pages/search/Search';
import NotFound from 'src/pages/404/NotFound';

const progress = new ProgressBar({
  size: 4,
  color: '#FE595E',
  className: 'z-50',
  delay: 100,
});

const queryClient = new QueryClient();

function App() {
  const location = useLocation();

  useEffect(() => {
    progress.start();

    setTimeout(() => {
      progress.finish();
    }, 1000);
  }, [location]);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/property/:id" element={<PropertyDetails />} />
            <Route path="/search" element={<Search />} />
            <Route path="/page-not-found" element={<NotFound />} />
            <Route
              path="*"
              element={<Navigate to={'/page-not-found'} replace />}
            />
          </Route>
        </Routes>
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </QueryClientProvider>
    </>
  );
}

export default App;
