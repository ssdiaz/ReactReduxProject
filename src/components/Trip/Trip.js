import React from 'react'
import AttendeesContainer from '../../containers/AttendeesContainer'

const Trip = (props) => {
    
    console.log(props, 'props Trip')
    console.log(props.match.params.id, 'match here') //=>2
   
    
    let trip = props.trips.find( trip => trip.id == props.match.params.id)
    console.log(trip, 'let trip in Trip')

    return (
        <div>   
            <ul key={trip.id}>
                <li>Location: {trip.location}</li>
                <li>Start Date: {trip.start_date}</li>
                <li>End Date: {trip.end_date}</li>
                {/* <AttendeesContainer /> */}
            </ul>
        </div>
  )
}

export default Trip