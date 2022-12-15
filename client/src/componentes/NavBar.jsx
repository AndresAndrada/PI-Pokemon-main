import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
        <ul>
          <li><Link to='/home'>Home</Link></li>
          <li><Link to='/home/create'>Create a Pokemon</Link></li>
          <li><Link to='/home/about'>About</Link></li>
          <form >
            {/* <label htmlFor="">Search</label> */}
            <input type="text" name="name" placeholder="Search Pokemon..." />
            <input type="submit" value='Search' />
          </form>
        </ul>
    </div>
  )
}

export default NavBar;