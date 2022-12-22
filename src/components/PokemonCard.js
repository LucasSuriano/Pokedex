import React from 'react';
import { Link } from "react-router-dom";
import { getBackgroundByColour, getColourGradient} from '../helpers/ColoursHelper';

export default function PokemonCard({pokemon}){
    
    const type = pokemon.types[0].type.name;
    const sprite = pokemon.sprites.front_default;
    const id = pokemon.id;
    const name = pokemon.name;

    return (
      <Link to={`/detail/${id}`} style={{ 
          textDecoration: 'none',
          color: 'white',
          textShadowColor: 'rgba(0, 0, 0, 0.75)',
          textShadowOffset: {width: -1, height: 1},
          textShadowRadius: 10
        }}>
        <div
            className="item"
            style={{ background: 
                pokemon.types[1] 
                    ? getColourGradient(type, pokemon.types[1].type.name) 
                    : getBackgroundByColour(type) 
                }}>
            
            <img src={sprite} alt={"Image of " + name}/>
            <h2>{id}: {name}</h2>
        </div>
      </Link>
    )
}