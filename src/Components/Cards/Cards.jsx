import { useEffect, useState } from "react";

function Cards() {
  const [pokemons, setPokemons] = useState([]);

  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  const getPokemons = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/pokemon",
        requestOptions
      );
      const data = await response.json();
      setPokemons(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {getPokemons()}, []);

  return <div>{pokemons.map((pokemon)=>(
    <h1 key={pokemon.id}>{pokemon.name}</h1>
  ))}</div>;
}

export default Cards;
