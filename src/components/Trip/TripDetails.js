const TripDetails = (props) => {
    let trip = props.trip

    return(
            // <div className="card text-white bg-info mb-3">
            <div className="trip-card">
                <ul className="text-center" key={trip.id}>
                    <h4>Location:</h4> 
                    <h2>{trip.location}</h2>
                    {/* <li>Start Date: {trip.start_date}</li> */}
                    {/* <li>End Date: {trip.end_date}</li> */}
                </ul>
            </div>
    )
}

export default TripDetails;