import { useEffect, useState } from "react";
import "./Cards.css";
import "../../index.css";
import { Link } from "react-router-dom";


function Cards({ filterPokemon, nameChecked }) {
  const [pokemons, setPokemons] = useState([]);

  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  const getPokemons = async () => {
    try {
      const response = await fetch(
        `https://poke-json-wine.vercel.app/pokemon`,
        requestOptions
      );
      const data = await response.json();
      setPokemons(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <div className="card-list-pokemon ">
      {filterPokemon.map((pokemon) => (
        <main key={pokemon.id} className="container">
          <a  href="#" className="card-pokemon">
            <Link to={`/profile/${pokemon.id}`}>
              <div data-aos="zoom-in"
                className={`card-img ${
                  nameChecked === "Name" ? "card-img-name" : ""
                }`}
              >
                <div className="pokemon-id">
                  <span>#{pokemon.id}</span>
                </div>
                <img  src={pokemon.image} alt="pokemon" />
                <div className="card-name">
                  <p>{pokemon.name}</p>
                </div>
              </div>
            </Link>
          </a>
        </main>
      ))}
    </div>
  );
}

export default Cards;
