import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import FetchPetDetails from './FetchPetDetails';
const Details = () => {
  const { id } = useParams();
  const result = useQuery(['details', id], FetchPetDetails);
  console.log(result.data);
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
  return (
    <div className="details">
      <div>
        <h1> {pet.name} </h1>
        <h2>
          {' '}
          {pet.animal} {pet.breed} - {pet.city}, {pet.state}{' '}
        </h2>
        <button>adapt {pet.name}</button>
        <p> {pet.description}</p>
      </div>
    </div>
    // <h1>vad</h1>
  );
};
export default Details;
