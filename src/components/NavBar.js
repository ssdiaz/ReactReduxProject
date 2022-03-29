import React from 'react'
import {  NavLink } from "react-router-dom";
import { Switch,  Route } from "react-router-dom";
import Home from './Home';
import Trips from './Trip/Trips';


const NavBar = () => {

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink to='/' className="nav-link" >HOME</NavLink>
        <NavLink to='/trips' className="nav-link" activeStyle={{background: "lightblue"}} >TRIPS</NavLink>
      </nav>

      <Switch>           
        <Route exact path="/trips" ></Route>
        <Route exact path="/" component={Home}></Route>
      </Switch>
    </>
  )
}

export default NavBar;