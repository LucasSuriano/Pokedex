import React , { useState, useEffect } from 'react';
import { getPokemonByUrl } from '../services/PokemonService';
import { useNavigate, useParams } from "react-router-dom";
import pokeball from "../icons/pokeball.png"
import Movements from './Movements';
import Stats from './Stats';
import Info from './Info';

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
        <div >
            {pokemon
                ? <div>
                    <button className="btn" onClick={()=>navigate("/")}>
                        <img alt="pokeball" src={pokeball} width="30px" height="30px"/>
                        Back
                    </button>
                    <div className='detailContainer'>
                        <Info pokemon={pokemon} key={id}/>
                        <Stats pokemon={pokemon}/>
                        <Movements pokemon={pokemon}/>
                    </div>
                </div>
                : null
            }
        </div>
    )
}