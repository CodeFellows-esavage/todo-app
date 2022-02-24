import React from "react";
import { Link } from "react-router-dom";

function NavBar(props){
  return(
    <nav>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/settings">Settings</Link>
        <li>Home</li>
        <li>Settings</li>
      </ul>
    </nav>
  )
}

export default NavBar;