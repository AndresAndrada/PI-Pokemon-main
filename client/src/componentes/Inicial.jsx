import React from "react";
import style from './Inicial.module.css'
import { Link } from "react-router-dom";

const Inicial = () => {
  return (
    <div className={ style.inicial }>
      <div className={ style.title }>
        <h1>Welcome to "Henry Pokemon"</h1>
      </div>
      <div className={ style.home }>
        <Link to='/home'><button className={ style.boton }>Home</button></Link>  
      </div>
    </div>
    )
}

export default Inicial;