// import React from 'react';
const Pet = (props) => {
  // return React.createElement('div', {}, [
  //   React.createElement('h1', {id: props.id}, props.name),
  //   React.createElement('h2', {id: props.id}, props.type),
  //   React.createElement('h3', {id: props.id}, props.category),
  // ]);
  return (
    <>
      <div>
        <h2> {props.name} </h2>
        <h2> {props.type} </h2>
        <h3> {props.category} </h3>
      </div>
    </>
  );
};
export default Pet;
