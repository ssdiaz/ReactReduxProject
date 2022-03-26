const TripDetails = (props) => {
    let trip = props.trip

    return(
        <ul key={trip.id}>
            <li>Location: {trip.location}</li>
            {/* <li>Start Date: {trip.start_date}</li> */}
            {/* <li>End Date: {trip.end_date}</li> */}
        </ul>
    )
}

export default TripDetails;