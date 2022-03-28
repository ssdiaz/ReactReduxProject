import React from 'react'
import {  NavLink } from "react-router-dom";

const NavBar = () => {

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink to='/' className="nav-link" >HOME</NavLink>
        <NavLink to='/trips' className="nav-link" >TRIPS</NavLink>
      </nav>
    </div>
  )
}

export default NavBar
