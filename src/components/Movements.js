import React , { useState } from 'react';
import punch from "../icons/punch.png"
import { getMoveByUrl } from '../services/PokemonService';

export default function Movements({pokemon}){

    const [move, setMove] = useState();

    const movements = pokemon.moves.map((movement, index)=>{
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
        <div className="divMoves">
            <h1 className='detailTitles'><img alt="punch" src={punch} width="30px" height="30px"/> Moves</h1>
            <ul className='gridMoves'>
                {movements}
            </ul>
        </div>
    )
}