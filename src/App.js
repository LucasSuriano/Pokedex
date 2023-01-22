import React, { useState, useEffect } from 'react';
import './index.css';

import Navbar from './components/Navbar';
import Pokedex from './components/Pokedex';
import { getAllPokemon, getPokemonByUrl } from './services/PokemonService';

export default function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [page, setPage] = useState(sessionStorage.getItem("page")?parseInt(sessionStorage.getItem("page")):1);
  const [loading, setLoading] = useState(true);

  //UseEffect sirve para ejecutar codigo cuando se modifica algun elemento entre los corchetes.
  useEffect(() => {
    getPokemons(24);
  }, []);

  useEffect(() => {
    if (!loading){
      getPokemons(24);
    }
  }, [page]);

  function sleep(ms){
    return new Promise(res => setTimeout(res,ms))
  }

  async function getPokemons(limit = 24) {
    setLoading(true);
    await sleep(500);
    const results = await getAllPokemon(limit, limit*page);

    const promesas = results.map(async (poke) => {
      return await getPokemonByUrl(poke.url);
    });

    const pokemones = await Promise.all(promesas);
    setLoading(false);
    setPokemonList(pokemones);
  }

  return (
    <div className='container'>
      <Navbar />

      {loading 
        ? <img alt="Loading..." className="gif" src="https://cdn.dribbble.com/users/1081076/screenshots/2832850/pokemongo.gif"/>
        : <Pokedex pokemonList={pokemonList} page={page} setPage={setPage} totals={24}/>
      } 
      
    </div>
  );
}
