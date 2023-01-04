import React, { useEffect, useState } from "react";
import style from './Cards.module.css'
import img from './img/pokemon.png'
import Pokemon from "./Pokemon";
import Filtros from "./FiltrosType";
import { useDispatch, useSelector } from "react-redux";
import { getApi } from "../redux/action";
import Type from './Type';
import ApiDB from "./ApiDB";

function Cards() {
    const [page, setPage] = useState(1);
    const [forPage] = useState(12)
    // console.log(poke,'STATE POKE')

    const dispatch = useDispatch(); // en via la info al reducer
    useEffect(() => {    // se ejecuta la accion cuando se monta el componente  
        dispatch(getApi());
    }, [dispatch]);
    
    const state = useSelector(state => state.pokemons) // propiedad de initialState que esta en reducer => un array 
    // useSelector va cambiar siempre que escuche un cambio en reducer

    // const maximo = parseInt(state.length / forPage);
    const nextPage = () => {
        setPage(page+1);
    }

    const prevPage = () => {
        setPage(page-1);
    }
    return ( 
        <div className={ style.fondo }>
            <div className={ style.cards }>
                {/* <div className={ style.home }> */}
                    <h2>Home</h2>
                {/* </div> */}
                <div className={ style.filter }>
                    <Filtros />
                </div>
            </div>
            <div className={ style.imgpPag }>
            <img className={ style.img } src={img} width='200' height='90' alt="" />
                <p className={ style.text }>Pagina: { page }</p>
                <div className={ style.boton }>
                    <button onClick={ prevPage }>Prev</button>
                    <button onClick={ nextPage }>Next</button>
                </div>
            </div>
            <div className={ style.typePoke}>                              
                { state.length ? (
                <div className={ style.type }>
                    <div>
                        <h2>ORIGEN:</h2>
                        <ApiDB />
                    </div>
                    <div>
                        <h2>TYPES</h2>
                        <Type />
                    </div>
                </div>
                ) : <div></div> }             
                <div className={ style.poke }>
                    { state.length ? state.slice((page-1)*forPage, (page-1)*forPage + forPage).map(p => {
                        return (
                            <div key={ p.id }>
                                <Pokemon
                                key={ p.id }
                                id={ p.id }
                                sprites={ p.sprites }
                                name={ p.name }
                                types={ p.types.map(pk => {
                                    return (
                                        <div key={ pk }>{ pk }</div>
                                    )
                                })}
                                />
                            </div>)
                    }) : <div className={ style.loading }><div className={ style.loader }></div></div>}
                </div>
            </div>

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