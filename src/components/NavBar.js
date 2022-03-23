import React from 'react'
// import { Route, Link } from 'react-router-dom'
// import { Link } from "react-router-dom";
import {
  BrowserRouter,
  Switch,
  Route,
  Link, 
  HashRouter, NavLink
} from "react-router-dom";

import Home from './Home';
import Attendees from './Attendee/Attendees';
import AttendeeInput from './Attendee/AttendeeInput';
import Activities from './Activity/Activities';
import ActivityInput from './Activity/ActivityInput';

import Trips from './Trip/Trips';

const NavBar = () => {

  return (
    <div>
        {/* <Link to='/' style={{paddingRight: '10px'}} component={Home} /> */}

        {/* <Link to='/' style={{paddingRight: '10px'}} >Home</Link> */}


        <Link to='/trips' style={{paddingRight: '10px'}}>Trips</Link> 
        
        {/* <Link to='/attendees' style={{paddingRight: '10px'}} >Attendees</Link>
        <Link to='/attendees/new' style={{paddingRight: '10px'}} > Add Attendees</Link>

        <Link to='/activities' style={{paddingRight: '10px'}}>Activities</Link>
        <Link to='/activities/new' style={{paddingRight: '10px'}}> Add Activities</Link>  */}
        

        


      {/* <Switch> */}
        {/*         
        <Route exact path="/attendees"><Attendees /></Route>
        <Route exact path="/attendees/new"><AttendeeInput /></Route>
        <Route exact path="/activities"><Activities /></Route>
        <Route exact path="/activities/new"><ActivityInput /></Route> */}
        
        
        {/* <Route exact path="/trips"><Trips /></Route>
        <Route exact path="/"><Home /></Route>
      </Switch> */}

    </div>





//     <Router>
//   <div className="content">
//     <Route exact path="/" component={ <Home/> }/>
//     <Route exact path='/attendees' style={{paddingRight: '10px'}} >Attendees</Route>
//     {/* <Route path="/stuff" component={Stuff}/>
//     <Route path="/contact" component={Contact}/> */}
//   </div>
// </Router>
  )
}

export default NavBar



{/* <Router>
  <div className="content">
    <Route exact path="/" component={Home}/>
    <Route path="/stuff" component={Stuff}/>
    <Route path="/contact" component={Contact}/>
  </div>
</Router> */}