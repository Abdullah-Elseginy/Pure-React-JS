import React from 'react';
export const Pet = (props) => {
  return React.createElement('div', {}, [
    React.createElement('h1', {id: props.id}, props.name),
    React.createElement('h2', {id: props.id}, props.type),
    React.createElement('h3', {id: props.id}, props.category),
  ]);
  //   return (
  //     <>
  //       <div>
  //         <h1> {props.name} </h1>
  //         <h1> {props.type} </h1>
  //         <h1> {props.category} </h1>
  //       </div>
  //     </>
  //   );
};
