import React from 'react'
import { connect } from 'react-redux'
import { deleteTrip } from '../../actions/Trips/deleteTrip'
import { render } from '@testing-library/react'
import { Route } from 'react-router-dom'
import AttendeesContainer from '../../containers/AttendeesContainer'
import ActivitiesContainer from '../../containers/ActivitiesContainer'
import TripInput from './TripInput'
import TripDetails from './TripDetails'

class Trip extends React.Component {

    state = {
        displayTripInput: false
    }

    displayTripInput = () => {
        this.setState({
            displayTripInput: !this.state.displayTripInput
        })
    }

    handleDelete = () => {
        let trip = this.props.trips.find( trip => trip.id == this.props.match.params.id)
        // console.log(trip, 'trip in delete')



        this.props.deleteTrip(trip.id) //not this.props here because it's a functinal component
        
        this.props.history.push('/trips')
    }

    render() {
        console.log(this.props,'props')
        console.log(this.state,'state')

        let trip = this.props.trips.find( (trip) => trip.id == this.props.match.params.id)
        
        return (
            <div>
                <TripDetails trip={trip} />

                <AttendeesContainer trip={trip} />
                <ActivitiesContainer trip={trip} />
                
                <button onClick={ this.displayTripInput }>Edit</button>  
                <button onClick={ () => this.handleDelete() }>Delete Trip</button>  

                {this.state.displayTripInput == true ? <TripInput trip={trip}/> :  null } 
            </div>
        )
    }
}

export default connect(null, {deleteTrip})(Trip)