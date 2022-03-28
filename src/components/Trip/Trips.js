import React from 'react'
import { Link } from 'react-router-dom'
import TripInput from './TripInput'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

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
            <div>
                <h3>Trips</h3>              
                <div className="card">
                    {this.props.trips && this.props.trips.map( (trip, index) => 
                        <div className="card-body" key={index}>
                            <Link to={`/trips/${trip.id}`} className="btn btn-info" >{trip.location}</Link>
                        </div>
                    )} 
                </div>
                    
                <button className="btn btn-primary btn-lg" onClick={ () => this.displayTripInput()} >Add Trip</button>   
                {this.state.displayTripInput === true ?  <Redirect to='/trips/new' render={ <TripInput /> } /> :  null }
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