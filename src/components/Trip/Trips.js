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
        // console.log(this.props,'props')
        return (
            <div>
                <h3>Trips</h3>              
                {this.props.trips && this.props.trips.map( (trip, index) => 
                    <li key={index}>
                        <Link to={`/trips/${trip.id}`} trips={trip && trip} >{trip.location}</Link>
                    </li>
                )} 

                <button onClick={() => this.displayTripInput()}>Add Trip</button>                    
                {this.state.displayTripInput == true ? <TripInput /> :  null }
                
                {/* <Link to='/trips/new'  component={TripInput} replace >
                    <button> Add Trip </button>
                </Link> */}
            </div>
        )
    }
}

export default Trips