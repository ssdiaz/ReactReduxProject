import React from 'react'
import {Route, Link} from 'react-router-dom'


// import ActivitiesContainer from './containers/ActivitiesContainer';
import AttendeesContainer from '../../containers/AttendeesContainer';
import ActivitiesContainer from '../../containers/ActivitiesContainer';


const Trip = (props) => {
    
    // console.log(props, 'props in trip')
    // console.log(props.match.params.id, 'matchhh')
    
    let trip = props.trips.find(trip => trip.id == props.match.params.id)

    // console.log(trip, 'trip')

    return (
    <div>   
        <h3>Trip</h3>

        <div>
            <h4>Trip ID: {trip.id -1} // Bride to Be: {trip.bride_id}:</h4>
            <ul key={trip.id}>
                <li>Location: {trip.location}</li>
                <li>Start Date: {trip.start_date}</li>
                <li>End Date: {trip.end_date}</li>
            </ul>
                {/* <li>Girls Going: {trip.attendees.map((attendee, index) =>
                        <ul key={index}>
                            <li>{attendee.name}</li>
                        </ul>
                        )}
                </li> */}

                {/* <li>Activities Planned: {trip.activities.map((activity, index) =>
                        <ul key={index}>
                            <li>{activity.name}</li>
                        </ul>
                        )}
                </li> */}

        </div>
 
        <AttendeesContainer trip={trip} />
        {/* <ActivitiesContainer trip={trip} /> */}

        {/* <Link to='/attendees/new' style={{paddingRight: '10px'}} > Add Attendee</Link>
        <Link to='/activities/new' style={{paddingRight: '10px'}}> Add Activities</Link>    */}

    </div>

  )
}

export default Trip