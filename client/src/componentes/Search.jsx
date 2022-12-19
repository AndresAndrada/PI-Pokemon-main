import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { Link } from "react-router-dom";
import { findName } from "../redux/action";

const Search = () => {
    const [poke, setPoke] = useState({
        name: '',
        // height: 0,
        // weight: 0,
        // sprites: '',
        // type: '',
    })
    const handleChange = (e) => {
        // console.log(e, 'Change')
        setPoke({
            [e.target.name]: e.target.value,
        })
        // console.log(poke, 'POKE NAME')
    };


    const dispatch = useDispatch()

    const handleOnSubmit = (e) => {
        e.preventDefault()
        dispatch(findName(poke.name))
        console.log(poke, 'POKE');
    };


    return (
        <div>
            <form onSubmit={ handleOnSubmit }>
            <input type="text" name="name" placeholder="Search Pokemon..." onChange={ handleChange } />
            <input type="submit" value='Search' />
          </form>
        </div>
    )
}

export default Search;