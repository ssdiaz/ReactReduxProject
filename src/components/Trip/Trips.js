import React from 'react'
import { Link } from 'react-router-dom'
import TripInput from './TripInput'
import { connect } from 'react-redux'

class Trips extends React.Component {    
    state = {
        ...this.state,
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
            <div class="container">
                <h3>Trips</h3>              
                {this.props.trips && this.props.trips.map( (trip, index) => 
                    <li key={index}>
                        <Link to={`/trips/${trip.id}`} class="btn btn-info" >{trip.location}</Link>
                    </li>
                )} 

                <button class="btn btn-primary btn-lg" onClick={ () => this.displayTripInput()} >Add Trip</button>   
                {this.state.displayTripInput == true ? <TripInput /> :  null }
            </div>
        )
    }
}


const mapStateToProps = state => { 
    return {
        trips: state.trips,
    }
}

export default connect(mapStateToProps)(Trips);