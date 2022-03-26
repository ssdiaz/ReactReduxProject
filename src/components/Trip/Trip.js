import React from 'react'
import { connect } from 'react-redux'
import { deleteTrip } from '../../actions/Trips/deleteTrip'
import TripInput from './TripInput'
import TripDetails from './TripDetails'
import AttendeesContainer from '../../containers/AttendeesContainer'
import ActivitiesContainer from '../../containers/ActivitiesContainer'

class Trip extends React.Component {
    
    state = {
        displayTripInput: false
    }

    displayTripInput = () => {
        this.setState({
            displayTripInput: !this.state.displayTripInput
        })
    }

    handleDelete = (trip) => {
        this.props.deleteTrip(trip.id)        
        this.props.history.push('/trips')
    }

    render() {
        let trip = this.props.trips.find( (trip) => trip.id == this.props.match.params.id)
        
        return (
            <div>
                <TripDetails trip={trip} />
                <AttendeesContainer trip={trip} />
                <ActivitiesContainer trip={trip} />
                
                <button onClick={ this.displayTripInput }>Edit</button>  
                <button onClick={ () => this.handleDelete(trip) }>Delete Trip</button>  

                {this.state.displayTripInput == true ? <TripInput trip={trip} />  :  null } 
            </div>
        )
    }
}


export default connect(null, {deleteTrip})(Trip)