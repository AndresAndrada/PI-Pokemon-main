import React from "react";
import style from './Pokemon.module.css'
import { Link } from "react-router-dom";

export default function Pokemon({ id, name, sprites, types }) {
  // console.log(id, 'ID POKE')
  
  return (
    <div className={ style.poke }>
      <div className={ style.img }>
        <img className={ style.img1 } src={ sprites } width='100' alt="imagenPokemon" />
      </div>
      <div >
        <Link className={ style.link } key={ id } to={`/home/detail/${id}`}>
          <h3>{ name }</h3>
        </Link>
      </div>
      <div>
        <h5>{ types }</h5>
      </div>
    </div>
  )
}