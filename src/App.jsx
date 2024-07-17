import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Pet from './Pet';
import Search from './Search';
import Details from './Details';
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
      <div>
        <h1>
          <Link to={'/'}>Adot me</Link>
        </h1>
      </div>
      <Routes>
        <Route path="/details/:id" element={<Details />}></Route>
        <Route path="/" element={<Search />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
const container = document.querySelector('#root');
const root = createRoot(container);
root.render(<App />);
