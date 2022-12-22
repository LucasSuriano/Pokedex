export async function getAllPokemon(limit = 24, offset = 0) {
    const url = `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`;
    const response = await fetch(url);
    const { results } = await response.json();
    return results;
  }

export async function getPokemonByUrl(urlPokemon) {
    const response = await fetch(urlPokemon);
    const pokemon = await response.json();
    return pokemon;
  }

export async function getStatByUrl(urlStat) {
    const response = await fetch(urlStat);
    const stat = await response.json();
    return stat;
  }

export async function getMoveByUrl(urlMove) {
    const response = await fetch(urlMove);
    const move = await response.json();
    return move;
  }