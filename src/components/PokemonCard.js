import React from 'react';
import {getBackgroundByColor} from '../helpers/ColoursHelper';

export default function PokemonCard({pokemon}){
    
    const type = pokemon.types[0].type.name;
    const sprite = pokemon.sprites.front_default;
    const name = pokemon.name;
    
    return (
        <div
            className="item"
            style={{ background: getBackgroundByColor(type) }}>
            <img src={sprite} alt={"Image of " + name}/>
            <h2>{name}</h2>
        </div>
    )
}