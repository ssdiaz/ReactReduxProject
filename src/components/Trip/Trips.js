import React from 'react'
import {Route, Link} from 'react-router-dom'
import AttendeesContainer from '../../containers/AttendeesContainer'
// import Trip from './Trip'
// import AttendeeInput from '../Attendee/AttendeeInput'
// import ActivityInput from '../Activity/ActivityInput'


const Trips = (props) => {
    
    // console.log(props.trips, 'props')

    return (
    <div>
            <h3>Trip Details:</h3>
            
            {props.trips.map( (trip, index) => 
                <div>
                    {/* <h4><Link to={`/trips/${trip.id}`}>Trip {index+1}</Link>:</h4> */}
                    <ul key={trip.id}>
                        <li>Location: {trip.location}</li>
                        <li>Start Date: {trip.start_date}</li>
                        <li>End Date: {trip.end_date}</li>

                        {/* <li>Girls Going: {trip.attendees.map((attendee, index) =>
                             <ul key={index}>
                                 <li>{attendee.name}</li>
                             </ul>
                             )}
                        </li> */}

                    </ul>
                </div>
            )} 

        {/* <Link to='/attendees/new' style={{paddingRight: '10px'}} > Add Attendee</Link>

        <Link to='/activities/new' style={{paddingRight: '10px'}}> Add Activities</Link>   */}

    </div>

  )
}

export default Trips