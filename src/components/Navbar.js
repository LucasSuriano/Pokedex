import React, { useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';
import logoPokedex from "../icons/logoPokedex.png"

export default function Navbar(){

    const x = useContext(AuthContext);
    console.log(x);

    return (
        <>
            <h1 alt="Titulo" className="title"> <img src={logoPokedex} width="70px" height="70px"/>Pokedex {x.user.name}</h1>
        </>
    )
}