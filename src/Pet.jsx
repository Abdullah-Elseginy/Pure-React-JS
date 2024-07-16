// import React from 'react';
const Pet = ({ name, animal, bread, images, location, id }) => {
  // return React.createElement('div', {}, [
  //   React.createElement('h1', {id: props.id}, props.name),
  //   React.createElement('h2', {id: props.id}, props.type),
  //   React.createElement('h3', {id: props.id}, props.category),
  // ]);
  // const { name, animal, bread } = props;
  let animalImage = 'http://pets-images.dev-apis.com/pets/none.jpg';
  if (images.length) {
    animalImage = images[0];
  }
  return (
    <a href={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={animalImage} alt={name}></img>
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>
          {' '}
          {animal}- {bread} - {location}
        </h2>
      </div>
    </a>
  );
};
export default Pet;

// http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed},
// pets api

//         http://pets-v2.dev-apis.com/breeds?animal=${animal},

// breeds api

// default image
// "http://pets-images.dev-apis.com/pets/none.jpg"
