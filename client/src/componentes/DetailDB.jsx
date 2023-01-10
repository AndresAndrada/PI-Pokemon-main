import React, { useEffect } from "react";
import style from './DetailType.module.css'
import { useDispatch, useSelector } from "react-redux";
import { getApi } from "../redux/action";

const DetailDB = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getApi())
    }, [dispatch]);

    const state = useSelector(state => state.pokemons) // propiedad de initialState que esta en reducer => un array 
    // console.log(state[0].id.length, 'STATE API DB');

    const api = state.filter(pk => pk.id.length > 3)
    // console.log(api, 'API');
    
    return (
        <div className={ style.type }>
            <div className={ style.title }>
                <h1>POKEMONS IN THE DATA BASE</h1>
            </div>
            <div className={ style.pokeApi }>
            {api ? api.map(pk => {
                return (
                    <div key={ pk.id } className= { style.typePokeApi }>
                        <img src={ pk.sprites } alt={ pk.name } />
                        <h3>{ pk.name }</h3>
                        <h4>Type: { pk.types.map(tp => <div key={ tp }>{ tp }</div>) }</h4>
                    </div>
                )
            }) : <div className={ style.loading }><div className={ style.loader }></div></div>}
            </div>
        </div>
    );
};

export default DetailDB;