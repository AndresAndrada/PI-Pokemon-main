import React, { useEffect } from "react";
import Pokemon from "./Pokemon";
import { useDispatch, useSelector } from "react-redux";
import { getApi } from "../redux/action";

export default function Cards() {
    const dispatch = useDispatch(); // envia la info al reducer
    
    useEffect(() => {
        dispatch(getApi());
    }, [dispatch]);
    
    const state = useSelector(state => state.pokemons) // propiedad de initialState que esta en reducer => un array 
    // useSelector va cambiar siempre que escuche un cambio en reducer
    console.log(state, 'state');

    return (
        <div>
            <h2>Pokemons</h2>
            { state && state.map( p => {
                return (
                    <Pokemon 
                    key={ p.name}
                    sprites={ p.sprites }
                    name={ p.name }
                    types={ p.types }
                    />
                ) })
            }
        </div>
    );
};