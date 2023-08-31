import React from 'react'
import "./DetailsCard.css"
import { useState, useEffect } from 'react';
import {useParams} from "react-router-dom"

function DetailsCard() {
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
    <div className={`body-card-bg ${pokemon.type1}`} >
        <div className='first-section'>
            <img src='../public/icons/arrow_back.svg'></img>
            <h1>{pokemon.name}</h1>
            <p>{pokemon.id}</p>
        </div>
        <div className='details-stats'>
            <div className='detailing-body'>

                <div className='carrousel-section'>
                 <img src='../public/icons/chevron_left.svg'></img>
                    <img src={pokemon.image}></img>
                    <img src='../public/icons/chevron_right.svg'></img>
                </div>
          
                <div className='type-stats'>
                    <p className={`types ${pokemon.type1}`}>{pokemon.type1}</p>
                    <p className={`types ${pokemon.type2}`}>{pokemon.type2}</p>
                </div>
                <h3 className='class-about'>About</h3>
                </div>
                <div className='dimension-poke'>
                    <div className='first-props'>
                        <img src='../public/icons/weight.svg'></img>
                        <p><b>{pokemon.weight}</b></p>
                        <p>Weight</p>
                    </div>
                    <hr></hr>
                    <div className='second-props'>
                        <img src='../public/icons/straighten.svg'></img>
                        <p><b>{pokemon.height}</b></p>
                        <p>Height</p>
                    </div>
                    <hr></hr>
                    <div className='three-props'>
                        <p><b>{pokemon.move1}</b></p>
                        <p><b>{pokemon.move2}</b></p>
                        <p>Moves</p>
                    </div>
                
                </div>
                <div className="description-section">
                    <p>{pokemon.description}</p>
                </div>
                <h3 className='stats-title'>Base Stats</h3>
                <div className='progress-bar'>
                    <div>
                       <h5>HP</h5> 
                       <h5>ATK</h5> 
                       <h5>DEF</h5> 
                       <h5>SATK</h5> 
                       <h5>SDEF</h5> 
                       <h5>SPD</h5> 
                    </div>
                    <hr></hr>
                    <div className='progress-stats'>
                        <p>{pokemon.baseStats.hp}</p>
                        <p>{pokemon.baseStats.atk}</p>
                        <p>{pokemon.baseStats.def}</p>
                        <p>{pokemon.baseStats.satk}</p>
                        <p>{pokemon.baseStats.sdef}</p>
                        <p>{pokemon.baseStats.spd}</p>
                    </div>
                    <div className='container-porcent-bar'>
                    <progress className='porcent-bar' value={pokemon.baseStats.hp} max="250"></progress>
                    <progress className='porcent-bar' value={pokemon.baseStats.atk} max="250"></progress>
                    <progress className='porcent-bar' value={pokemon.baseStats.def} max="250"></progress>
                    <progress className='porcent-bar' value={pokemon.baseStats.satk} max="250"></progress>
                    <progress className='porcent-bar' value={pokemon.baseStats.sdef} max="250"></progress>
                    <progress className='porcent-bar' value={pokemon.baseStats.spd} max="250"></progress>
                    </div>
                </div>

        </div>
    </div>
  ))}</div>;
}

export default DetailsCard