import React from "react";

export default function Pokemon({ name, sprites, types }) { 
    <div>
        <h1>ESTOY</h1>
        <div>
            <img src={ sprites } alt="imagenPokemon" />
        </div>
        <div>
            <h3>{ name }</h3>
        </div>
        <div>
            <h5>{ types }</h5>
        </div>
    </div>
}