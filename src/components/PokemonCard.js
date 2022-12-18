import React from 'react';
import {colours, getBackgroundByColor} from '../helpers/ColoursHelper';

export default function PokemonCard({pokemon}){
    
    const type = pokemon.types[0].type.name;
    const sprite = pokemon.sprites.front_default;
    const name = pokemon.name;
    
    function hexToRgb(hex){
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16)
        } : null;
      }

    function getColorGradiente(name){
        const primaryColor = colours[type];
        const secondaryColor = colours[name];
    
        const colorRGB1 = hexToRgb(primaryColor);
        const colorRGB2 = hexToRgb(secondaryColor);
        
        return `linear-gradient(33deg, rgba(${colorRGB1.r},${colorRGB1.g},${colorRGB1.b},1) 25%, rgba(${colorRGB2.r},${colorRGB2.g},${colorRGB2.b},1) 75%)`;
      }

    return (
        <div
            className="item"
            style={{ background: 
                pokemon.types[1] 
                    ? getColorGradiente(pokemon.types[1].type.name) 
                    : getBackgroundByColor(type) 
                }}>
            <img src={sprite} alt={"Image of " + name}/>
            <h2>{name}</h2>
        </div>
    )
}