const Pet = (props) => {
  return React.createElement('div', {}, [
    React.createElement('h1', {id: props.id}, props.name),
    React.createElement('h2', {id: props.id}, props.type),
    React.createElement('h3', {id: props.id}, props.category),
  ]);
};
const App = () => {
  return React.createElement('div', {id: 'mydiv', className: 'mo'}, [
    React.createElement('h1', null, 'Hola Animal'),
    React.createElement(Pet, {
      name: 'CAt',
      type: 'AO',
      category: 'HGS',
      id: 'h1',
    }),
    React.createElement(Pet, {
      name: 'DOG',
      type: 'PO',
      category: 'MINS',
      id: 'h2',
    }),
    React.createElement(Pet, {
      name: 'MONKY',
      type: 'KO',
      category: 'FOS',
      id: 'h1',
    }),
  ]);
};
const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
