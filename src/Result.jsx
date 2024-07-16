import Pet from './Pet';
export default function Result({ pets }) {
  return (
    <div className="search">
      {pets.length == 0 ? (
        <h1>pets not found</h1>
      ) : (
        pets.map((item, index) => (
          <div>
            <Pet
              //   {...item}
              name={item.name}
              animal={item.animal}
              bread={item.breed}
              key={item.id}
              id={item.id}
              images={item.images}
              location={`${item.city},${item.state}`}
            ></Pet>
          </div>
        ))
      )}
    </div>
  );
}
