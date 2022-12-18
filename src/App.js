import React, { useState, useEffect } from 'react';
import './index.css';

export default function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [registrosTotales, SetRegistrosTotales] = useState(0);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(24);

  const colours = {
    normal: '#A8A77A',
    fire: '#EE8130',
    water: '#6390F0',
    electric: '#F7D02C',
    grass: '#7AC74C',
    ice: '#96D9D6',
    fighting: '#C22E28',
    poison: '#A33EA1',
    ground: '#E2BF65',
    flying: '#A98FF3',
    psychic: '#F95587',
    bug: '#A6B91A',
    rock: '#B6A136',
    ghost: '#735797',
    dragon: '#6F35FC',
    dark: '#705746',
    steel: '#B7B7CE',
    fairy: '#D685AD',
  };

  useEffect(() => {
    getAllPokemon(24, 0);
  }, []);

  async function getAllPokemon(limit = 24, offset = 0) {
    const url = `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`;
    const response = await fetch(url);
    const { count, results } = await response.json();
    SetRegistrosTotales(count);

    const promesas = results.map(async (poke) => {
      return await getPokemonByUrl(poke.url);
    });

    const pokemones = await Promise.all(promesas);
    setPokemonList(pokemones);
  }

  async function getPokemonByUrl(urlPokemon) {
    const response = await fetch(urlPokemon);
    const pokemon = await response.json();
    return pokemon;
  }

  async function buscarPokemonesAnteriores() {
    console.log('Numero de Pagina = ' + pageNumber);
    console.log('Offset = ' + offset);
    console.log('Limite = ' + limit);
    if (pageNumber > 0) {
      setPageNumber(pageNumber - 1);
      setOffset(limit * pageNumber);
      getAllPokemon(limit, offset);
    }
  }

  async function buscarPokemonesSiguientes() {
    console.log('Numero de Pagina = ' + pageNumber);
    console.log('Offset = ' + offset);
    console.log('Limite = ' + limit);
    console.log('Registros = ' + registrosTotales);
    if (pageNumber < registrosTotales / limit) {
      setPageNumber(pageNumber + 1);
      setOffset(limit * pageNumber);
      getAllPokemon(limit, offset);
    }
  }

  //console.log('renderizando');

  return (
    <div>
      {pokemonList ? (
        <div className="grid">
          {pokemonList.map((pokemon, index) => (
            <div
              className="item"
              key={index}
              style={{ background: colours[pokemon.types[0].type.name] }}
            >
              <img src={pokemon.sprites.front_default} />
              <h2>{pokemon.name}</h2>
            </div>
          ))}
        </div>
      ) : null}

      <button onClick={() => buscarPokemonesAnteriores()}>Anterior</button>
      <button onClick={() => buscarPokemonesSiguientes()}>Siguiente</button>
    </div>
  );
}
