import React , { useState } from 'react';
import punch from "../icons/punch.png"
import { getMoveByUrl } from '../services/PokemonService';

export default function Movements({pokemon}){

    const [move, setMove] = useState();

    const movements = pokemon.moves.map((movement, index)=>{
        //const move = getMove(movement.move.url);
        //console.log(move);
        //return <li key={index}>{move.names[5].name}</li>;
        console.log(movement.move);
        return <li key={index}>{movement.move.name}</li>;
    });

    async function getMove(url){
        var move = await getMoveByUrl(url);
        setMove(move);
        return move;
    }

    return (
        <div className="item">
            <h1><img alt="punch" src={punch} width="30px" height="30px"/> Moves</h1>
            <ul>
                {movements}
            </ul>
        </div>
    )
}