import Countdown from 'react-countdown';

const TripDetails = (props) => {
    let trip = props.trip

    let start_date = trip.start_date

    return(
            // <div className="card text-white bg-info mb-3">

            <div className="trip-card">
                <ul className="text-center" key={trip.id}>
                    <h4>Location:</h4> 
                    <h2>{trip.location}</h2>
                    <li>Start Date: {start_date}</li>
                    <li>End Date: {trip.end_date}</li>
                    <li>Countdown: <Countdown date={start_date} zeroPadDays={props => <div>{props.total}</div>} /></li>
                </ul>
            </div>
    )
}

export default TripDetails;