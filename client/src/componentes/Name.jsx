import React, { useEffect } from "react";
import style from './Name.module.css'
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { findName } from "../redux/action";

const Name = (props) => {
    // console.log(props, 'PROPS')
    const dispatch = useDispatch();
    const { name } = useParams();
    // console.log(name, 'NAME')

    useEffect(() => {
        dispatch(findName(name))
    },[dispatch, name])

    const state = useSelector(state => state.pokeName)
    // console.log(state, 'STATENAME')

    return (
        <div className={ style.name }>
            <h1>Detail Pokemon</h1>
            { state.length ? state.map(p => {
                return (
                    <div key={ p.id } className={ style.poke }>
                        <img src={ p.sprites } alt={ p.name } />
                        <h3 key={ p.id }>{ p.name }</h3>
                        <h4>Type: { p.types }</h4>
                        <h4>Height: { p.height }</h4>
                        <h4>Weight: { p.weight }</h4>
                    </div>
                )
            }) : <div className={ style.loading }><h4>LOADING</h4></div>}
        </div>
        // {state.length ? state.}
        // <div>
        // </div>
    )
}

export default Name;