import React, { useEffect, useState } from "react";
import style from './Cards.module.css'
import img from './img/pokemon.png'
import Pokemon from "./Pokemon";
// import Filtros from "./FiltrosType";
import { useDispatch, useSelector } from "react-redux";
import { apiDbFilter, filterPokemons, findType, getApi, typeFilter } from "../redux/action";
// import Type from './Type';
// import ApiDB from "./ApiDB";

function Cards() {
    const [page, setPage] = useState(1);
    const [forPage] = useState(12)
    const [actualizar, setActualizar] = useState(false)

    const dispatch = useDispatch(); // en via la info al reducer

    const pokemons = useSelector(state => state.pokeFilters); // propiedad de initialState que esta en reducer => un array
    // console.log(pokemons, 'POKEMONS POKE')
    const type = useSelector(state => state.type);
    // console.log(type, 'TYPE CARDS')
    
    const onChangeApi = (e) => {
        // console.log(e.target.value, 'TARGET');
        e.preventDefault();
        dispatch(apiDbFilter(e.target.value));
        if(actualizar === true) setActualizar(false)
        else setActualizar(true);
    };

    const onChangeAbAttack = (e) => {
        e.preventDefault();
        dispatch(filterPokemons(e.target.value));
        if(actualizar === true) setActualizar(false)
        else setActualizar(true);
    };

    const onChangeType = (e) => {
        // console.log(e.target.value,'TARGET'); 
        e.preventDefault();
        dispatch(typeFilter(e.target.value));
        // setPoke(pokemons);
    };

    useEffect(() => {    // se ejecuta la accion cuando se monta el componente
        dispatch(getApi());
        dispatch(findType());
    }, [dispatch]);

    // console.log(poke, 'POKESTAEDA')

    const nextPage = () => {
        if(page >= 4) return setPage(4);
        else setPage(page+1)
        console.log(page, 'NEXT')
    };
    const prevPage = () => {
        if(page <= 1) return setPage(1);
        else setPage(page-1)
        console.log(page, 'PREV')
    };
    // console.log(pokemons, 'RETUNR');
    return (
        <div className={ style.fondo }>
            <div className={ style.cards }>
                    <h2>Home</h2>
                <div className={ style.filter }>
                    {/* <Filtros /> */}
                    <select onChange={ onChangeAbAttack }>
                            <option value="todo">Filtro</option>
                            <option value="a-z">A-Z</option>
                            <option value="z-a">Z-A</option>
                            <option value="attack1">Up Attack</option>
                            <option value="attack2">Down Attack</option>
                        </select>
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
                { pokemons.length || pokemons.length ? (
                <div className={ style.type }>
                    <div>
                        <h2>ORIGEN:</h2>
                        <select onChange={ onChangeApi }>
                            <option value="todo">Filter</option>
                            <option value="api">API</option>
                            <option value="db">Data Base</option>
                        </select>
                    </div>
                    <div>
                        <h2>TYPES</h2>
                        <div>
                        <select onChange={ onChangeType }>
                            <option value="todo">Todos</option>
                            { type.map(tp => <option value={ tp.name } key={ tp.id }>{ tp.name }</option>) }
                        </select>
                        </div>
                    </div>
                </div>
                ) : <div></div> }
                <div className={ style.poke }>
                    { pokemons && pokemons.slice((page-1)*forPage, (page-1)*forPage + forPage).map(p => {
                        return (
                            <div className={ style.div } key={ p.id }>
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
                    })  
                    }
                    { !pokemons.length && <div className={ style.loading }><div className={ style.loader }></div></div> }
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