import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from './DetailType.module.css'
import { filterPokemons, getApi } from "../redux/action";
import Pokemon from "./Pokemon";
// // import Pokemon from "./Pokemon";

const AbcAttack = () => {
    const [poke, setPoke] = useState([]);
    // const [abc, setAbc] = useState([]);

    const dispatch = useDispatch();

    const pokemons = useSelector(state => state.pokemons);
    // console.log(pokemons, 'POKE ABC STATE');


    const onChange = (e) => {
        // console.log(e.target.value, 'eee');
        e.preventDefault() 
        dispatch(filterPokemons(e.target.value));
        setPoke(pokemons)
        // console.log(poke);
    };

    useEffect(() => {
        dispatch(getApi());
        setPoke(pokemons);
    }, [dispatch, poke]);

    return (
        <div className={ style.type }>
            <div className={ style.title }>
                <select className={ style.filtros } onChange={ onChange }>
                    <option value="todo" >Filters</option>
                    <option value="a-z">A-Z</option>
                    <option value="z-a">Z-A</option>
                    <option value="attack1">Up Attack</option>
                    <option value="attack2">Down Attack</option>
                </select>
                {/* <button onClick={ (e) => { dispatch(filterPokemons('abc'))} } value='abc'>A-Z</button>
                <button>Attack</button>
                <button>Original</button> */}
            </div>
            <div className={ style.poke }>
            {!poke.length ? pokemons.map(p => {
                return (
                    <div key={ p.id } className={ style.abc }>
                        <Pokemon 
                        key={ p.id }
                        id={ p.id }
                        sprites={ p.sprites }
                        name={ p.name }
                        types={ !p.types ? p.type : p.types } />
                    </div> 
                )
            }
            ) : poke.map(p => {
                return (
                    <div key={ p.id } className={ style.abc }>
                        <Pokemon 
                        key={ p.id }
                        id={ p.id }
                        sprites={ p.sprites }
                        name={ p.name }
                        types={ !p.types ? p.type : p.types } />
                    </div> 
                )
            })}
            </div>
        </div>
    )
}

export default AbcAttack;