import React from 'react';
import Pagination from './Pagination';
import PokemonCard from './PokemonCard';

export default function Pokedex({pokemonList, page, setPage, totals}){
    
    function previousPage(e){
        e.preventDefault();
        const previousPage = page-1
        if(previousPage < 0)
            return
        setPage(previousPage);
    }
    
    function nextPage(e){
        e.preventDefault();
        const nextPage = page+1
        setPage(nextPage);
    }

    return (
        <div className="pokedex">
            {pokemonList ? (
                    <div className="grid">
                    {pokemonList.map((pokemon, index) => (
                        <PokemonCard pokemon={pokemon} key={index}/>
                    ))}
                    </div>
                ) : null}
            <Pagination page={page+1} previousPage={previousPage} nextPage={nextPage}/>
        </div>  
    )
}