import React from 'react'
import {  Link } from "react-router-dom";

const NavBar = () => {

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to='/' className="nav-link" style={{paddingRight: '10px'}} >HOME</Link>
        <Link to='/trips' className="nav-link" style={{paddingRight: '10px'}} >TRIPS</Link>
      </nav>
    </div>
  )
}

export default NavBar
