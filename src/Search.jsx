// import React from 'react';

import { useState } from 'react';
const ANIMALS = ['bird', 'cat', 'dog', 'rabbit', 'rabitle'];
const Search = function () {
  const [location, Setlocation] = useState('Tanta');
  const [animal, setanimal] = useState('');
  return (
    <div className="search-params">
      <form>
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
        <button>submmit</button>
      </form>
    </div>
  );
};
export default Search;
