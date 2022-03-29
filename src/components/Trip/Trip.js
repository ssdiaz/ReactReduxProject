import React from 'react'
import { connect } from 'react-redux'
import { deleteTrip } from '../../actions/Trips/deleteTrip'
import TripDetails from './TripDetails'
import AttendeesContainer from '../../containers/AttendeesContainer'
import ActivitiesContainer from '../../containers/ActivitiesContainer'
import { Redirect } from 'react-router-dom'


class Trip extends React.Component {
    
    state = {
        displayTripInput: false,
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
            <>
                <TripDetails trip={trip} />

                <button className="btn btn-secondary" onClick={ this.displayTripInput }>Edit</button>  
                <button className="btn btn-danger" onClick={ () => this.handleDelete(trip) }>Delete Trip</button> 
                {this.state.displayTripInput === true ? <Redirect to={`/trips/${trip.id}/edit`} / > :  null } 

                <AttendeesContainer trip={trip} />
                <ActivitiesContainer trip={trip} /> 
            </>
        )
    }
}


export default connect(null, {deleteTrip})(Trip)