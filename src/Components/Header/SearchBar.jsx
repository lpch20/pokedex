import Cards from "../Cards/Cards";
import "./searchbar.css";
import { useEffect, useState } from "react";
import iconNumber from "/icons/tag.svg";
import iconName from "/icons/text_format.svg";

function SearchBar() {
  const [allPokemon, setAllPokemon] = useState([]);
  const [filterPokemon, setFilterPokemon] = useState([]);
  const [name, setPokename] = useState("");
  const [id, setPokeid] = useState("");
  const [click, setclick] = useState(false);
  const [checked, setChecked] = useState("Number");
  const [close, setClose] = useState(false);

  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  const handleClick = () => {
    setclick(!click);
  };

  const orderName = (pokemon1, pokemon2) => {
    if (pokemon1.name < pokemon2.name) {
      return -1;
    }
    if (pokemon1.name > pokemon2.name) {
      return 1;
    }

    return 0;
  };
  const orderNumber = (pokemon1, pokemon2) => {
    if (+pokemon1.id.replace("#", "") < +pokemon2.id.replace("#", "")) {
      return -1;
    }
    if (+pokemon1.id.replace("#", "") > +pokemon2.id.replace("#", "")) {
      return 1;
    }

    return 0;
  };

  const handleCheck = (option) => {
    setChecked(option);
    let order = allPokemon;
    if (checked === "Name") {
      order = allPokemon.sort(orderNumber);
    } else {
      order = allPokemon.sort(orderName);
    }
    setAllPokemon(order);
  };

  useEffect(() => {
    fetch("http://localhost:3000/pokemon", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setAllPokemon(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    const filtered =
      checked === "Number"
        ? allPokemon.filter((pokemon) =>
            pokemon.id.includes(id.replace("#", ""))
          )
        : allPokemon.filter((pokemon) =>
            pokemon.name.toLowerCase().includes(name.toLowerCase())
          );

    setFilterPokemon(filtered);
  }, [name, allPokemon, id, checked]);

  return (
    <div className="search-bar">
      <div className="pokedex-bar">
        <img src="/icons/pokeballMain.svg" alt="" />
        <h1>Pokédex</h1>
      </div>
      <div className="bar-and-filter">
        <div className="pokedex-search">
          <img src="/icons/search.svg" alt="" className="img-search" />
          <input
            type="text"
            placeholder="Search"
            value={checked === "Number" ? id : name}
            onChange={(e) => {
              if (checked === "Number") {
                setPokeid(e.target.value);
              } else {
                setPokename(e.target.value);
              }
              if (e.target.value.length !== "") {
                setClose(true);
              } else if (e.target.value.length === "") {
                setClose(false);
              }
            }}
          />
          {close && (
            <button
              className="close"
              onClick={() => setPokeid("") || setPokename("")}
            >
              {id && (
                <img src="/icons/close.svg" alt="" className="img-close" />
              )}
              {name && (
                <img src="/icons/close.svg" alt="" className="img-close" />
              )}
            </button>
          )}
        </div>
        <div className="filter">
          <button onClick={handleClick}>
            {/* <img src="/icons/sort.svg" alt="" /> */}
            <img src={checked === "Number" ? iconNumber : iconName} alt="" />
          </button>
        </div>

        {click ? (
          <div className="modal">
            <div className="title-sort">
              <h4>Sort by:</h4>
            </div>
            <div className="modal-selection">
              <div className="first-check">
                <input
                  id="input-number"
                  type="radio"
                  className="circular-checkbox"
                  value="Number"
                  checked={checked === "Number"}
                  onChange={() => handleCheck("Number")}
                />
                <label htmlFor="input-number">Number</label>
              </div>
              <div className="second-check">
                <input
                  id="input-name"
                  type="radio"
                  className="circular-checkbox"
                  value="Name"
                  checked={checked === "Name"}
                  onChange={() => handleCheck("Name")}
                />
                <label htmlFor="input-name">Name</label>
              </div>
            </div>
          </div>
        ) : null}
      </div>
      <Cards filterPokemon={filterPokemon} />
    </div>
  );
}

export default SearchBar;
