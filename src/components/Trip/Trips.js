import React from 'react'
import {Route, Link} from 'react-router-dom'
import AttendeesContainer from '../../containers/AttendeesContainer'
import Trip from './Trip'
// import AttendeeInput from '../Attendee/AttendeeInput'
// import ActivityInput from '../Activity/ActivityInput'
import TripInput from './TripInput'
// import { connect } from 'react-redux'

class Trips extends React.Component {
    
    state = {   //local state
        displayTripInput: false
    }
    
    displayTripInput = () => {
        // console.log(this.state, 'state here')
        this.setState({
            ...this.state,
            displayTripInput: !this.state.displayTripInput
        })
    }
    
    // console.log(props.trips, 'props in trips')
    
    render() {
        
        return (
            <div>
                <h3>Trips</h3>
                
                {this.props.trips && this.props.trips.map( (trip, index) => 
                    // <Trip trip={trip} key={index} />

                    <li key={index}>
                        <Link to={`/trips/${trip.id}`} trips={trip && trip} >{trip.location}</Link>
                    </li>
                )} 

                <button onClick={this.displayTripInput}>Add Trip</button>   
                {this.state.displayTripInput == true ? <TripInput /> :  null }
            </div>
        )
    }
}

export default Trips