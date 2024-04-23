import React, { useReducer } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';
import App from './App';
import PokemonDetail from './components/PokemonDetail';
import { AuthContext } from './auth/AuthContext';
import { authReducer } from './auth/AuthReducer';

export default function PokemonApp(){

    const [user,dispatch] = useReducer(authReducer,{});

    return (
        <AuthContext.Provider value={{user,dispatch}}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<App />}/>
                    <Route path='*' element={<App />}/>
                    <Route path='/detail/:id' element={<PokemonDetail />} />
                </Routes>
            </BrowserRouter>
        </AuthContext.Provider>
    )
}