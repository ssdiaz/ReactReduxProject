const TripDetails = (props) => {
    let trip = props.trip

    return(
            <div className="card text-white bg-info mb-3">
                <ul key={trip.id}>
                    Location: {trip.location}
                    {/* <li>Start Date: {trip.start_date}</li> */}
                    {/* <li>End Date: {trip.end_date}</li> */}
                </ul>
            </div>
    )
}

export default TripDetails;





