import React from 'react'
import {  Link } from "react-router-dom";

const NavBar = () => {

  return (
    <div>
        <Link to='/' style={{paddingRight: '10px'}} >HOME</Link>
        <Link to='/trips' style={{paddingRight: '10px'}}>TRIPS</Link>
    </div>
  )
}

export default NavBar
