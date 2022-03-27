import React from 'react'
import { Link } from "react-router-dom";

const Home = () => {

  return (
    <div>
      <div className="jumbotron">
        <h1 className="display-5">Welcome to the Bachelorette Planner!</h1>

        <p className="lead">
            Use this site to help you plan your next Bachelorette! Create a Trip and add guests attending and activities to see your trip in one snapshot dashboard.
        </p>

        <hr className="my-4"></hr>

        <p></p>

        <p className="lead">
          Click <Link to="/trips" className="btn btn-primary">Trips</Link> to get started.
        </p>
      </div>
    </div>
  )
}

export default Home