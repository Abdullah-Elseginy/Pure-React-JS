// import React from 'react';

export default function Search() {
  const location = 'Tanta';
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          <input id="location" value={location} placeholder="location"></input>
        </label>
        <button>submmit</button>
      </form>
    </div>
  );
}
