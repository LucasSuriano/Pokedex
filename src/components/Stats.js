import React from 'react';
import { getBackgroundByColour, getColourGradient } from '../helpers/ColoursHelper';
import pokecoin from "../icons/pokecoin.png"

export default function Stats({pokemon}){

    const stats = pokemon.stats.map((st, index)=>{
        return <li className='stat' key={index}>
            <div>
                <h4 className='statTitle'>{st.stat.name}</h4>
                <p className='statValue'>{st.base_stat}</p>
            </div>
        </li>;
    });

    return (
        <div className="divStats"
        style={{ background: 
            pokemon.types[1] 
                ? getColourGradient(pokemon.types[0].type.name, pokemon.types[1].type.name) 
                : getBackgroundByColour(pokemon.types[0].type.name) 
            }}>

            <h1 className='detailTitles'><img alt="pokecoin" src={pokecoin} width="30px" height="30px"/> Stats</h1>
            <ul className='gridStats'>
                {stats}
            </ul>
        </div>
    )
}