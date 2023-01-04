import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { findName } from "../redux/action";

const Search = () => {
    const [poke, setPoke] = useState('');
    
    const dispatch = useDispatch()
    
    const handleChange = (e) => {
        // console.log(e, 'Change')
        setPoke(e.target.value)
        // console.log(poke, 'POKE NAME')
    };

    const handleOnSubmit = (e) => {
        e.preventDefault()
        dispatch(findName(poke.name))
        console.log(poke, 'POKE');
    };
    
    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <input type="text" name="name" placeholder="Search Pokemon..." onChange={ (e) => handleChange(e) } />
                <Link to={`/home/${poke}`}><input type="submit" value='Search' /></Link>
            </form>
        </div>
    );
};

export default Search;