import React from 'react'
import {Route, Link} from 'react-router-dom'
import AttendeesContainer from '../../containers/AttendeesContainer'
// import Trip from './Trip'
// import AttendeeInput from '../Attendee/AttendeeInput'
// import ActivityInput from '../Activity/ActivityInput'


const Trips = (props) => {
    
    console.log(props.trips, 'props in trips')

    return (
    <div>
            <h3>Trip Details:</h3>
            
            {props.trips && props.trips.map( (trip, index) => 
                <div>

                    <ul key={trip.id}>
                        <li>Location: {trip.location}</li>
                        <li>Start Date: {trip.start_date}</li>
                        <li>End Date: {trip.end_date}</li>
                    </ul>
                </div>
            )} 
    </div>

  )
}

export default Trips