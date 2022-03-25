import React from 'react'
import { connect } from 'react-redux'
import AttendeesContainer from '../../containers/AttendeesContainer'
import { deleteTrip } from '../../actions/Trips/deleteTrip'
import { render } from '@testing-library/react'
import { Route } from 'react-router-dom'

class Trip extends React.Component {
// const Trip = (props) => {
    
    // console.log(props, 'props Trip')   // console.log(props.match.params.id, 'match here') //=>2
   
    // let trip = this.props.trips.find( trip => trip.id == this.props.match.params.id)// console.log(trip, 'let trip in Trip')




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
                </ul>
                
                <button onClick={() => this.handleDelete()}>Delete Trip</button>  
            </div>
        )
    }
}

export default connect(null, {deleteTrip})(Trip)