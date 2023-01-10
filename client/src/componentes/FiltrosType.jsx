import React from "react";
import { Link } from "react-router-dom";
import style from './FiltrosType.module.css'




const Filtros = () => {
   
    return(
        <div className={ style.boton}>
            <Link to='/home/filtros/abc-attack'><button>Filters</button></Link>
        </div>
    )
}

export default Filtros;