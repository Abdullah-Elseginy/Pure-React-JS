import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
const Details = () => {
  const { id } = useParams();
  return (
    <>
      {/* <header>
        <Link to={'/'}>Adot me</Link>
      </header> */}
      <h2>hi-- {id}</h2>;
    </>
  );
};
export default Details;
