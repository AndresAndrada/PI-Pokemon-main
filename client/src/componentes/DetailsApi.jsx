import React, { useEffect } from "react";
import style from './DetailType.module.css'
import { useDispatch, useSelector } from "react-redux";
import { getApi } from "../redux/action";

const DetailsApi = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getApi())
    }, [dispatch]);

    const state = useSelector(state => state.pokemons) // propiedad de initialState que esta en reducer => un array 
    // console.log(state, 'STATE API DB');

    const api = state.filter(pk => pk.id < 41)
    // console.log(api, 'API');
    
    return (
        <div className={ style.type }>
            <div className={ style.title }>
                <h1>POKEMONS IN THE API</h1>
            </div>
            <div className={ style.poke }>
                {api ? api.map(pk => {
                    return (
                        <div key={ pk.id } className= { style.typePoke }>
                            <img src={ pk.sprites } alt={ pk.name } />
                            <h3>{ pk.name }</h3>
                            <h4>Type: { pk.types }</h4>
                        </div>
                    )
                }) : <div className={ style.loading }><div className={ style.loader }></div></div>}
            </div>
        </div>
    );
};

export default DetailsApi;