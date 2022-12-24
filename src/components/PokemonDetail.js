import React , { useState, useEffect } from 'react';
import { getPokemonByUrl } from '../services/PokemonService';
import PokemonCard from './PokemonCard';
import { useNavigate, useParams } from "react-router-dom";
import pokeball from "../icons/pokeball.png"
import Movements from './Movements';
import Stats from './Stats';

export default function PokemonDetail(){
    
    const [pokemon, setPokemon] = useState();
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        getDetail(id);
      }, []);

    async function getDetail(){
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        var detalle = await getPokemonByUrl(url);
        setPokemon(detalle);
    }

    console.log(pokemon);

    return (
        <div className='detailContainer'>
            {pokemon
                ? <div>
                    <button className="btn" onClick={()=>navigate("/")}>
                        <img alt="pokeball" src={pokeball} width="30px" height="30px"/>
                        Back
                    </button>
                    <br></br>
                    <PokemonCard pokemon={pokemon} key={id}/>
                    <Stats pokemon={pokemon}/>
                    <Movements pokemon={pokemon}/>
                </div>
                : null
            }
        </div>
    )
}