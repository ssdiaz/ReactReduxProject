import React from 'react'
import { NavLink } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from './Home';


const NavBar = () => {
  return (
    <>
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light"> */}
      <nav className="navbar navbar-expand-lg">
        <NavLink to='/' className="nav-link" >HOME</NavLink>
        <NavLink to='/trips' className="nav-link" activeStyle={{background: "#FFDFEF"}} >TRIPS</NavLink>
      </nav>

      <Route exact path="/" component={Home}></Route>
    </>
  )
}

export default NavBar;