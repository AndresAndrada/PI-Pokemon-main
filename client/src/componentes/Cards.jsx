import React, { useEffect, useState } from "react";
import Pokemon from "./Pokemon";
import Filtros from "./FiltrosType";
import { useDispatch, useSelector } from "react-redux";
import { getApi } from "../redux/action";

function Cards() {
    const [page, setPage] = useState(1);
    // const [forPage, setForPage] = useState(10)
    // console.log(poke,'STATE POKE')

    const dispatch = useDispatch(); // envia la info al reducer
    useEffect(() => {    // se ejecuta la accion cuando se monta el componente  
        dispatch(getApi());
    }, [dispatch]);
    const state = useSelector(state => state.pokemons) // propiedad de initialState que esta en reducer => un array 
    console.log(state.length)
    // useSelector va cambiar siempre que escuche un cambio en reducer

    // const maximo = parseInt(state.length / forPage);
    const nextPage = () => {
        setPage(page+1);
        console.log(page, 'NEXT')
        // setForPage(forPage + 12)
    }

    const prevPage = () => {
        setPage(page-1);
        console.log(page, 'PAGE')
        // setForPage(forPage-12)
    }
   
    return ( 
        <div>
            <h2>Home</h2>
            <h3>Pokemons</h3>
            <Filtros />
            <div>
                <p>Pagina: { page }</p>
                    <button onClick={ prevPage }>Prev</button>
                    <button onClick={ nextPage }>Next</button>
            </div>
            { state.length ? state.map(p => {
                return (
                    <Pokemon
                    key={ p.id }
                    id={ p.id }
                    sprites={ p.sprites }
                    name={ p.name }
                    types={ p.types }
                    />)
            }) : <div>LOADING</div>}
        </div>
    );
};

export default Cards




// const page1 = (state) => {
    //     // console.log('PAGE1')
    //     return state.splice(0, 12);
    // }
    
    // const page2 = (state, page) => {
    //     // console.log('PAGE2')
    //     setPage(page + 1);
    //     return state.splice(13, 24);
    // };
    
    // const page3 = (state, page) => {
    //     // console.log('PAGE3')
    //     setPage(page + 1);
    //     return state.splice(25, 26);
    // }