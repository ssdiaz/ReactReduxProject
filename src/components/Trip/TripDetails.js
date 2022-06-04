import Countdown from 'react-countdown';

const TripDetails = (props) => {
    let trip = props.trip
    let start_date = trip.start_date

    const renderer = ({ days, hours, completed }) => {
        if (completed) {  
            return <span>~* Party Time! *~</span> 
        } else { 
            return <span>{days}</span> //hours has an issue here
        }
    }

    return(
        <div className="trip-card">
            <ul className="text-center" key={trip.id}>
                <h4>Location:</h4> 
                <h2>{trip.location}</h2>
                <li>Start Date: {start_date}</li>
                <li>End Date: {trip.end_date}</li>
                <li>Days Until Party: <Countdown date={start_date} renderer={renderer} /></li>
            </ul>
        </div>
    )
}

export default TripDetails;