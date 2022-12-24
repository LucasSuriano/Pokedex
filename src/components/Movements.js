import React , { useState } from 'react';
import { getBackgroundByColour, getColourGradient } from '../helpers/ColoursHelper';
import punch from "../icons/punch.png"
import { getMoveByUrl } from '../services/PokemonService';

export default function Movements({pokemon}){

    const [move, setMove] = useState();

    const movements = pokemon.moves.map((movement, index)=>{
        //const move = getMove(movement.move.url);
        //console.log(move);
        //return <li key={index}>{move.names[5].name}</li>;
        console.log(movement.move);
        return <li className='move' key={index}>
                <div>
                    <h4 className='moveTitle'>{movement.move.name}</h4>
                </div>
            </li>;
    });

    async function getMove(url){
        var move = await getMoveByUrl(url);
        setMove(move);
        return move;
    }

    return (
        <div className="divMoves"
        style={{ background: 
            pokemon.types[1] 
                ? getColourGradient(pokemon.types[0].type.name, pokemon.types[1].type.name) 
                : getBackgroundByColour(pokemon.types[0].type.name) 
            }}>
            <h1 className='detailTitles'><img alt="punch" src={punch} width="30px" height="30px"/> Moves</h1>
            <ul className='gridMoves'>
                {movements}
            </ul>
        </div>
    )
}