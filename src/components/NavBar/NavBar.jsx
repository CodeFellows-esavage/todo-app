import React from "react";
import { Link } from "react-router-dom";

function NavBar(props){
  return(
    <nav>
        <Link to="/">Home</Link>
        <Link to="/settings">Settings</Link>
    </nav>
  )
}

export default NavBar;