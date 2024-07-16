import React from 'react';
import ReactDOM from 'react-dom';
import Pet from './Pet';
import Search from './Search';
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
    <div>
      <h1>Adot me</h1>
      <Pet name="Cat" category="So" type="LO"></Pet>
      <Pet name="Fog" category="So" type="LO"></Pet>
      {/* <Pet name="Dog" category="oo" type="Do"></Pet> */}
      <Search />
    </div>
  );
};
export default App;
const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
