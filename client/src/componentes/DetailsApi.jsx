import React, { useEffect, useState } from "react";
import style from './DetailType.module.css'
import { useDispatch, useSelector } from "react-redux";
import { getApi } from "../redux/action";

const DetailsApi = () => {
    const [page, setPage] = useState(1);
    const [forPage] = useState(12);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getApi())
    }, [dispatch]);

    const state = useSelector(state => state.pokemons) // propiedad de initialState que esta en reducer => un array 
    // console.log(state, 'STATE API DB');

    const api = state.filter(pk => pk.id < 41)
    // console.log(api, 'API');

    const nextPage = () => {
        setPage(page+1);
    }

    const prevPage = () => {
        setPage(page-1);
    }
    
    return (
        <div className={ style.type }>
            <div className={ style.title }>
                <h1>POKEMONS IN THE API</h1>
                <p className={ style.text }>Pagina: { page }</p>
                <div className={ style.boton }>
                    <button onClick={ prevPage }>Prev</button>
                    <button onClick={ nextPage }>Next</button>
                </div>
            </div>
            <div className={ style.pokeApi }>
                {api ? api.slice((page-1)*forPage, (page-1)*forPage + forPage).map(pk => {
                    return (
                        <div key={ pk.id } className= { style.typePokeApi }>
                            <img src={ pk.sprites } alt={ pk.name } />
                            <h4>{ pk.name }</h4>
                            <h4>Type: { pk.types.map(tp => <div key={ tp }>{ tp }</div>) }</h4>
                        </div>
                    )
                }) : <div className={ style.loading }><div className={ style.loader }></div></div>}
            </div>
        </div>
    );
};

export default DetailsApi;