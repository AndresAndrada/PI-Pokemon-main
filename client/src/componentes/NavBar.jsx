import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import Type from "./Type";

const NavBar = () => {
  return (
    <div>
        <ul>
          <li><Link to='/home'>Home</Link></li>
          <li><Link to='/home/create'>Create a Pokemon</Link></li>
          <li><Link to='/home/about'>About</Link></li>
          <Search />
          <Type />
        </ul>
    </div>
  )
}

export default NavBar;