import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Pet from './Pet';
import Search from './Search';
import Details from './Details';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  // return React.createElement('div', {id: 'mydiv', className: 'mo'}, [
  //   React.createElement('h1', null, 'Hola Animal'),
  //   React.createElement(Pet, {
  //     name: 'CAt',
  //     type: 'AO',
  //     category: 'HGS',
  //     id: 'h1',
  //   }),
  //   React.createElement(Pet, {
  //     name: 'DOG',
  //     type: 'PO',
  //     category: 'MINS',
  //     id: 'h2',
  //   }),
  //   React.createElement(Pet, {
  //     name: 'MONKY',
  //     type: 'KO',
  //     category: 'FOS',
  //     id: 'h1',
  //   }),
  // ]);
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <header>
          <h1>
            <Link to={'/'}>Adot me</Link>
          </h1>
        </header>
        <Routes>
          <Route path="/details/:id" element={<Details />}></Route>
          <Route path="/" element={<Search />}></Route>
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
};
export default App;
const container = document.querySelector('#root');
const root = createRoot(container);
root.render(<App />);
