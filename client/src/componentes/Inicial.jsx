import React from "react";
import { Link } from "react-router-dom";

const Inicial = () => {
  return (
    <div>
      <h1>Bienvenidos a "Henry Pokemon"</h1>
      <Link to='/home'><button>Home</button></Link>  
    </div>
    )
}

export default Inicial;