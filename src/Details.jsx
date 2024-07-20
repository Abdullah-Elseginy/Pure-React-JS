import { Link } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import FetchPetDetails from './FetchPetDetails';
import Carousel from './Carousel';
import ErrorBoundery from './ErrorBoundery';
import { useContext } from 'react';
import AdaptedPetContext from './AdaptedPetContext';
const Details = () => {
  const { id } = useParams();
  const result = useQuery(['details', id], FetchPetDetails);
  // console.log(result.data);
  const [adaptedpet, setAdaptedPet] = useContext(AdaptedPetContext);
  // console.log(adaptedpet);
  const navigate = useNavigate();
  if (result.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader" style={{ width: 100, height: 100 }}>
          {' '}
        </h2>
      </div>
    );
  }
  const pet = result.data.pets[0];
  // throw new Error('');
  return (
    <div className="details">
      <Carousel images={pet.images} />
      <div>
        <h1> {pet.name} </h1>
        <h2>
          {' '}
          {pet.animal} {pet.breed} - {pet.city}, {pet.state}{' '}
        </h2>
        <button
          onClick={() => {
            setAdaptedPet(pet);
            navigate('/');
          }}
        >
          adapt {pet.name}
        </button>
        <p> {pet.description}</p>
      </div>
    </div>
  );
};
const DetailsErrorBoundery = () => {
  return (
    <ErrorBoundery>
      <Details />
    </ErrorBoundery>
  );
};
export default DetailsErrorBoundery;
