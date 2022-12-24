import React from 'react';
import { Link } from "react-router-dom";
import { getBackgroundByColour, getColourGradient} from '../helpers/ColoursHelper';

export default function PokemonCard({pokemon}){
    
    const type = pokemon.types[0].type.name;
    const sprite = pokemon.sprites.front_default;
    const id = pokemon.id;
    const name = pokemon.name;

    function makeDivTypes(types){
        return <div className='types'>
            
            <img className='imgType' src={require(`../icons/types/${types[0].type.name}.png`)} alt={types[0].type.name} />
            {types[1] 
                ? <img className='imgType' src={require(`../icons/types/${types[1].type.name}.png`)} alt={types[1].type.name} />
                : null}
        </div>
        
    }

    return (
      <Link to={`/detail/${id}`} style={{ 
          textDecoration: 'none',
          color: 'white',
          textShadowColor: 'rgba(0, 0, 0, 0.75)',
          textShadowOffset: {width: -1, height: 1},
          textShadowRadius: 10
        }}>
        <div
            className="card"
            style={{ background: 
                pokemon.types[1] 
                    ? getColourGradient(type, pokemon.types[1].type.name) 
                    : getBackgroundByColour(type) 
                }}>
            
            <img className='imgPokedex' src={sprite} alt={"Image of " + name}/>
            <div className='infoPokemonCard'>
                <h3 className='pokemonName'>{name}</h3>
            </div>
            <div className='infoPokemonCard'>
                <h3 className='pokemonId'>#{id}</h3>
            </div>
        </div>
      </Link>
    )
}