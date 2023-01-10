import React from "react";
import style from './NavBar.module.css';
import img from './img/Imagen1.png'
import { Link } from "react-router-dom";
import Search from "./Search";

const NavBar = () => {
  return (
    <div className={ style.navbar }>
      <div className={ style.home }>
        <Link to='/home'>
          <img src={img} width='110' height='40' alt="" />
        </Link>
      </div>
      <ul>
        {/* <li><Link to='/home'>Home</Link></li> */}
        <li><Link to='/home/create/poke' className={ style.lista }>Create a Pokemon</Link></li>
        <li><Link to='/' className={ style.lista }>Inicial</Link></li>
        <div>
          <Search className={ style.search } />
        </div>
      </ul>
    </div>
  )
}

export default NavBar;