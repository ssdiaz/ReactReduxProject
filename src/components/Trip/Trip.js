import React from 'react'
import { connect } from 'react-redux'
import { deleteTrip } from '../../actions/Trips/deleteTrip'
import { render } from '@testing-library/react'
import { Route } from 'react-router-dom'
import AttendeesContainer from '../../containers/AttendeesContainer'
import ActivitiesContainer from '../../containers/ActivitiesContainer'

class Trip extends React.Component {
// const Trip = (props) => {

    handleDelete = () => {
        let trip = this.props.trips.find( trip => trip.id == this.props.match.params.id)
        // console.log(trip, 'trip in delete')
        this.props.deleteTrip(trip.id) //not this.props here because it's a functinal component
        
        this.props.history.push('/trips')
    }

    render() {

        let trip = this.props.trips.find( (trip) => trip.id == this.props.match.params.id)
        
        return (
            <div>   
                <ul key={trip.id}>
                    <li>Location: {trip.location}</li>
                    <li>Start Date: {trip.start_date}</li>
                    <li>End Date: {trip.end_date}</li>
                    <AttendeesContainer trip={trip} />
                    <ActivitiesContainer trip={trip} />
                </ul>
                
                <button onClick={() => this.handleDelete()}>Delete Trip</button>  
            </div>
        )
    }
}

export default connect(null, {deleteTrip})(Trip)