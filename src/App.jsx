import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Pet from './Pet';
import Search from './Search';
import Details from './Details';
import AdaptedPetContext from './AdaptedPetContext';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  const adaptedpet = useState(null);
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <div>
          <h1>
            <Link to="/">Adot me</Link>
          </h1>
        </div>
        <AdaptedPetContext.Provider value={adaptedpet}>
          <Routes>
            <Route path="/details/:id" element={<Details />}></Route>
            <Route path="/" element={<Search />}></Route>
          </Routes>
        </AdaptedPetContext.Provider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};
export default App;
const container = document.querySelector('#root');
const root = createRoot(container);
root.render(<App />);
