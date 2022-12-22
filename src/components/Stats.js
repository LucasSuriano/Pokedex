import React , { useState } from 'react';
import pokecoin from "../icons/pokecoin.png"
import { getStatByUrl } from '../services/PokemonService';

export default function Stats({pokemon}){

    const [stat, setStat] = useState();

    const stats = pokemon.stats.map((st, index)=>{
        //const stat = getStat(st.stat.url);
        //console.log(stat);
        //return <li key={index}>{stat.names[5].name}: {stat.base_stat}</li>;
        console.log(st.stat);
        return <li className='stat' key={index}>
            <div>
                <h4 className='statTitle'>{st.stat.name}</h4>
                <p className='statValue'>{st.base_stat}</p>
            </div>
        </li>;
    });

    async function getStat(url){
        var stat = await getStatByUrl(url);
        setStat(stat);
        return stat;
    }

    return (
        <div className="item">
            <h1><img alt="pokecoin" src={pokecoin} width="30px" height="30px"/> Stats</h1>
            <ul className='gridStats'>
                {stats}
            </ul>
        </div>
    )
}