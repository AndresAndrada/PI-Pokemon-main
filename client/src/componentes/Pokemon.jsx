import React from "react";
import { Link } from "react-router-dom";

export default function Pokemon({ name, sprites, types }) { 
  return (
  <div>
    <div>
      <img src={ sprites } alt="imagenPokemon" />
    </div>
    <div>
      <Link to='/home/detail'>
        <h3>{ name }</h3>
      </Link>
    </div>
    <div>
      <h5>{ types }</h5>
    </div>
  </div>
  )
}