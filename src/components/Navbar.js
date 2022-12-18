import React from 'react';
import logoPokedex from "../icons/logoPokedex.png"

export default function Navbar(){
    return (
        <h1 alt="Titulo" className="title"> <img src={logoPokedex} width="70px" height="70px"/>Pokedex</h1>
    )
}