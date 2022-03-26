import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Home = () => {

  return (
    <div>
        <p>Welcome to the Bachelorette Planner!</p>
        
        <p>Use this site to help you plan your next Bachelorette! Create a Trip and add guests attending and activities to see your trip in one snapshot dashboard.</p>

        <p>Click <Link to="/trips">Trips</Link> to get started.</p>
    </div>
  )
}

export default Home