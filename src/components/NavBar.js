import React from 'react'
import {  NavLink } from "react-router-dom";
import { Switch,  Route } from "react-router-dom";
import Home from './Home';


const NavBar = () => {

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink to='/' className="nav-link" >HOME</NavLink>
        <NavLink to='/trips' className="nav-link" >TRIPS</NavLink>
      </nav>

      <Switch>           
        <Route exact path="/trips" ></Route>
        <Route exact path="/" component={Home}></Route>
      </Switch>
    </>
  )
}

export default NavBar;