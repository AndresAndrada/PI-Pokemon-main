import React, { useEffect } from "react";
import Pokemon from "./Pokemon";
import { useDispatch, useSelector } from "react-redux";
import { getApi } from "../redux/action";

function Cards() {
    const dispatch = useDispatch(); // envia la info al reducer
    
    useEffect(() => {    // se ejecuta la accion cuando se monta el componente  
        dispatch(getApi());
    }, [dispatch]);
    
    const state = useSelector(state => state.pokemons) // propiedad de initialState que esta en reducer => un array 
    // useSelector va cambiar siempre que escuche un cambio en reducer
    console.log(state.map(pk => pk.id), 'ID CARDS');
    console.log(state, 'ID CARDS');


    return (
        <div>
            <h2>Home</h2>
            <h3>Pokemons</h3>
            { state && state.map( p => {
                return (
                    <Pokemon
                    id={ p.id}
                    sprites={ p.sprites }
                    name={ p.name }
                    types={ p.types }
                    />
                )
            })}
        </div>
    );
};

export default Cards