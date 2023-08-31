import "./DetailsCard.css";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function DetailsCard() {
  const [pokemon, setPokemon] = useState("");
  const { id } = useParams();

  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  const reloadPage = () => {
    window.location.reload();
  };

  const getPokemons = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/pokemon/${id}`,
        requestOptions
      );
      const data = await response.json();
      setPokemon(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPokemons();
  }, []);

  if (!pokemon) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <div key={pokemon.id} className={`body-card-bg ${pokemon.type1}`}>
        <div className="first-section">
          <img src="/icons/arrow_back.svg"></img>
          <h1>{pokemon.name}</h1>
          <p>{pokemon.id}</p>
        </div>
        <div className="details-stats">
          <div className="detailing-body">
            <div className="carrousel-section">
              <a
                onClick={reloadPage}
                href=""
                style={{ visibility: !pokemon.previd ? "hidden" : "visible" }}
              >
                <Link to={`/profile/${pokemon.previd}`}>
                  <img src="/icons/chevron_left.svg"></img>
                </Link>
              </a>
              <img src={pokemon.image}></img>
              <a
                onClick={reloadPage}
                href=""
                style={{ visibility: !pokemon.nextid ? "hidden" : "visible" }}
              >
                <Link to={`/profile/${pokemon.nextid}`}>
                  <img src="/icons/chevron_right.svg"></img>
                </Link>
              </a>
            </div>

            <div className="type-stats">
              <p className={`types ${pokemon.type1}`}>{pokemon.type1}</p>
              <p className={`types ${pokemon.type2}`}>{pokemon.type2}</p>
            </div>
            <h3 className="class-about">About</h3>
          </div>
          <div className="dimension-poke">
            <div className="first-props">
              <img src="/icons/weight.svg"></img>
              <p>
                <b>{pokemon.weight}</b>
              </p>
              <p>Weight</p>
            </div>
            <hr></hr>
            <div className="second-props">
              <img src="/icons/straighten.svg"></img>
              <p>
                <b>{pokemon.height}</b>
              </p>
              <p>Height</p>
            </div>
            <hr></hr>
            <div className="three-props">
              <p>
                <b>{pokemon.move1}</b>
              </p>
              <p>
                <b>{pokemon.move2}</b>
              </p>
              <p>Moves</p>
            </div>
          </div>
          <div className="description-section">
            <p>{pokemon.description}</p>
          </div>
          <h3 className="stats-title">Base Stats</h3>
          <div className="progress-bar">
            <div>
              <h5>HP</h5>
              <h5>ATK</h5>
              <h5>DEF</h5>
              <h5>SATK</h5>
              <h5>SDEF</h5>
              <h5>SPD</h5>
            </div>
            <hr></hr>
            <div className="progress-stats">
              <p>{pokemon.baseStats.hp}</p>
              <p>{pokemon.baseStats.atk}</p>
              <p>{pokemon.baseStats.def}</p>
              <p>{pokemon.baseStats.satk}</p>
              <p>{pokemon.baseStats.sdef}</p>
              <p>{pokemon.baseStats.spd}</p>
            </div>
            <div className="container-porcent-bar">
              <progress
                className="porcent-bar"
                value={pokemon.baseStats.hp}
                max="250"
              ></progress>
              <progress
                className="porcent-bar"
                value={pokemon.baseStats.atk}
                max="250"
              ></progress>
              <progress
                className="porcent-bar"
                value={pokemon.baseStats.def}
                max="250"
              ></progress>
              <progress
                className="porcent-bar"
                value={pokemon.baseStats.satk}
                max="250"
              ></progress>
              <progress
                className="porcent-bar"
                value={pokemon.baseStats.sdef}
                max="250"
              ></progress>
              <progress
                className="porcent-bar"
                value={pokemon.baseStats.spd}
                max="250"
              ></progress>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsCard;
