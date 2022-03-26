import React from 'react'
import { Link } from 'react-router-dom'
import TripInput from './TripInput'

class Trips extends React.Component {    
    state = {
        displayTripInput: false
    }
    
    displayTripInput = () => {
        this.setState({
            ...this.state,
            displayTripInput: !this.state.displayTripInput
        })
    }
   
    render() {        
        return (
            <div>
                <h3>Trips</h3>              
                {this.props.trips && this.props.trips.map( (trip, index) => 
                    <li key={index}>
                        <Link to={`/trips/${trip.id}`} >{trip.location}</Link>
                    </li>
                )} 

                <button onClick={() => this.displayTripInput()}>Add Trip</button>   
                {this.state.displayTripInput == true ? <TripInput /> :  null }
            </div>
        )
    }
}

export default Trips