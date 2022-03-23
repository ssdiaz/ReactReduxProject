import React from 'react'


const Trip = (props) => {
    
    console.log(props.trip,'props in TRIP')


    let trip = props.trip

    return (
        <div>   
            <ul key={trip.id}>
                <li>Location: {trip.location}</li>
                <li>Start Date: {trip.start_date}</li>
                <li>End Date: {trip.end_date}</li>
                
            </ul>
        </div>
  )
}

export default Trip