// import React from 'react';
const Pet = ({ name, animal, bread }) => {
  // return React.createElement('div', {}, [
  //   React.createElement('h1', {id: props.id}, props.name),
  //   React.createElement('h2', {id: props.id}, props.type),
  //   React.createElement('h3', {id: props.id}, props.category),
  // ]);
  // const { name, animal, bread } = props;
  return (
    <>
      <div
        style={{
          display: 'flex',
          backgroundColor: '#0cc',
          borderRadius: 10,
          justifyContent: 'space-around',
          flexDirection: 'row',
          margin: 10,
        }}
      >
        <h2> {name} </h2>
        <h2> {animal} </h2>
        <h3> {bread} </h3>
      </div>
    </>
  );
};
export default Pet;

// http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed},
// pets api

//         http://pets-v2.dev-apis.com/breeds?animal=${animal},

// breeds api

// default image
// "http://pets-images.dev-apis.com/pets/none.jpg"
