import { useContext, useEffect, useState } from 'react';
import Pet from './Pet';
import useListbreed from './useListbreed';
import Result from './Result';
import AdaptedPetContext from './AdaptedPetContext';
const ANIMALS = ['bird', 'cat', 'dog', 'rabbit', 'rabitle'];
const Search = function () {
  const [location, Setlocation] = useState('');
  const [animal, setanimal] = useState('');
  const [bread, setbread] = useState('');
  const [Breads, isloading, Error] = useListbreed(animal);
  const [pets, setpets] = useState([]);
  const [loader, setloader] = useState(false);
  const [adaptedpet] = useContext(AdaptedPetContext);

  useEffect(() => {
    requestPets();
  }, []);
  async function requestPets() {
    setloader(true);
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${bread}`,
    );
    const json = await res.json();
    // console.log(json.pets);
    setpets(json.pets);
    setloader(false);
  }

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
        // style={{
        //   backgroundColor: '#0cc',
        //   // position: 'absolute',
        //   // display: 'block',
        //   alignSelf: 'center',
        // }}
      >
        {adaptedpet ? (
          <div className="pet image-container" style={{ marginBottom: '5px' }}>
            <img src={adaptedpet.images[0]} alt={adaptedpet.name}></img>
          </div>
        ) : null}
        <label htmlFor="location">
          <input
            value={location}
            onChange={(e) => {
              Setlocation(e.target.value);
            }}
            id="location"
            placeholder="location"
          ></input>
        </label>
        <label htmlFor="animal">
          Animal
          <select
            key={'animal'}
            id="animal"
            value={animal}
            onChange={(e) => {
              setanimal(e.target.value);
            }}
          >
            <option key={'empty'}></option>;
            {ANIMALS.map((item, index) => (
              <>
                <option value={item} key={item}>
                  {item}{' '}
                </option>
              </>
            ))}
          </select>
        </label>

        <label htmlFor="breed">
          breed
          <select
            id="breed"
            key={'breed'}
            value={bread}
            onChange={(e) => {
              setbread(e.target.value);
            }}
          >
            {Breads.map((item, index) => (
              <>
                <option value={item} key={index}>
                  {item}
                </option>
              </>
            ))}
          </select>
        </label>
        <button
          onClick={() => {
            setloader(true);
          }}
          // disabled={loader}
        >
          {isloading || loader ? <span className="loader"></span> : 'submit'}
        </button>
      </form>

      <Result pets={pets} />
    </div>
  );
};
export default Search;
