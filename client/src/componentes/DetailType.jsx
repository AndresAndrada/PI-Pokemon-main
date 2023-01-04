import React, { useEffect } from "react";
import style from './DetailType.module.css'
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getApi } from "../redux/action";

const DetailType = () => {
    const { poke } = useParams();
    console.log(poke, 'POKE')
    const dispatch = useDispatch()

    // llamar a la funcion gtePoke para traer todos los pokemons, filtrarlos por tipos para mostrarlos
    useEffect(() => {
        dispatch(getApi());
    }, [dispatch]);

    const state = useSelector(state => state.pokemons) // propiedad de initialState que esta en reducer => un array 
    // console.log(state, 'STATE 1');

    const arr = [];

    const stateMap = state.map(pk => pk.types.forEach(e => {
        if(e === poke) arr.push(pk);
    }));

    // console.log(arr, 'ARRAY');



    return (
        <div className={ style.type }>
            <div className={ style.title }>
                <h1>DETAIL TYPE</h1>
            </div>
            <div className={ style.poke }>
                {arr.length && arr.map(pk => {
                    // if(pk.types === poke) {
                        return (
                            <div key={ pk.id } className= { style.typePoke }>
                                <img src={pk.sprites} alt={pk.name} />
                                <h3>Name: {pk.name}</h3>
                                <h4>Type: {pk.types}</h4>
                        {pk.attack && pk.defending && pk.speed && pk.height ? (
                        <div>
                            <h4>Height: {pk.height }</h4>
                            <h4>Attack: {pk.attack}</h4>
                            <h4>Defending: {pk.defending}</h4>
                            <h4>Speed: {pk.speed}</h4>

                        </div>) : pk.attack && pk.defending && pk.speed ? (
                        <div>
                             <h4>Attack: {pk.attack}</h4>
                                <h4>Defending: {pk.defending}</h4>
                                <h4>Speed: {pk.speed}</h4>
                        </div>) : ('')}
                            </div>
                        )
                    // }
                    return pk.name
                })}

            </div>
            
        </div>
    )
};

// DON'T FOUND POKEMON WITH THIS TYPE

export default DetailType;