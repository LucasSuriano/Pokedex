import React from 'react';

export default function Info({pokemon}){
    
    const sprite = pokemon.sprites.front_default;
    const id = pokemon.id;
    const name = pokemon.name;

    function makeDivTypes(types){
        return <div className='types'>
            <div className='pokemonType'>
                <img className='imgType' src={require(`../icons/types/${types[0].type.name}.png`)} alt={types[0].type.name} />
                <p className='textType'>{types[0].type.name}</p>
            </div>
            
            {types[1] 
                ? <div className='pokemonType'>
                    <img className='imgType' src={require(`../icons/types/${types[1].type.name}.png`)} alt={types[1].type.name} />
                    <p className='textType'>{types[1].type.name}</p>
                </div>
                : null}
        </div>
    }

    return (
        <div className='info'>
            <img className='imgPokedex' src={sprite} alt={"Image of " + name}/>
            <div className='infoPokemonCard'>
                <div className='topCard'>
                    <h3 className='pokemonName'>{name}</h3>
                    <h3 className='pokemonId'>#{id}</h3>
                </div>
                <div className='bottomCard'>
                    {makeDivTypes(pokemon.types)}
                </div>
            </div>
        </div>
    )
}