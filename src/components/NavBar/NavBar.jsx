import React from "react";
import { Link } from "react-router-dom";
import Login from "../Login/Login";


function NavBar(props){
  return(
    <nav>
        <Link to="/">Home</Link>
        <Link to="/settings">Settings</Link>
        <Login />
    </nav>
  )
}

export default NavBar;