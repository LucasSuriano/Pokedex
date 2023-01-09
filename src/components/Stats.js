import React from 'react';
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
        <div className="divStats">
            <h1 className='detailTitles'><img alt="pokecoin" src={pokecoin} width="30px" height="30px"/> Stats</h1>
            <ul className='gridStats'>
                {stats}
            </ul>
        </div>
    )
}