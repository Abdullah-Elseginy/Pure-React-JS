import { useEffect, useState } from 'react';
import Pet from './Pet';
const ANIMALS = ['bird', 'cat', 'dog', 'rabbit', 'rabitle'];
const Breads = [];
const Search = function () {
  const [location, Setlocation] = useState('Tanta');
  const [animal, setanimal] = useState('');
  const [bread, setbread] = useState('');
  const [pets, setpets] = useState([]);
  useEffect(() => {
    requestPets();
  }, []);
  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${bread}`,
    );
    const json = await res.json();
    console.log(json.pets);
    setpets(json.pets);
  }
  return (
    <div className="search-params" style={{}}>
      <form
        style={{
          backgroundColor: '#0cc',
          // position: 'absolute',
          // display: 'block',
          alignSelf: 'center',
        }}
      >
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
            id="animal"
            value={animal}
            onChange={(e) => {
              setanimal(e.target.value);
            }}
          >
            <option key={'c'}></option>;
            {ANIMALS.map((item, index) => (
              <>
                <option value={item} key={item}>
                  {item}{' '}
                </option>
              </>
            ))}
          </select>
        </label>

        <label htmlFor="bread">
          Animal
          <select
            id="bread"
            value={bread}
            onChange={(e) => {
              setanimal(e.target.value);
            }}
          >
            <option></option>;
            {Breads.map((item, index) => (
              <>
                <option value={item} key={item}>
                  {item}{' '}
                </option>
              </>
            ))}
          </select>
        </label>
        <button>submmit</button>
      </form>
      <div style={{}}>
        {pets.map((item, index) => (
          <>
            <Pet
              name={item.name}
              animal={item.animal}
              bread={item.breed}
              key={item.id}
            ></Pet>
          </>
        ))}
      </div>
    </div>
  );
};
export default Search;
