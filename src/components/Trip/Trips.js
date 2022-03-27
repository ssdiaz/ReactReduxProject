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
            <div>
                <div className="card">
                    <h3>Trips</h3>              
                    {this.props.trips && this.props.trips.map( (trip, index) => 
                        <div className="card-body">
                            <Link to={`/trips/${trip.id}`} className="btn btn-info" >{trip.location}</Link>
                        </div>
                    )} 
                </div>
                    
                <button className="btn btn-primary btn-lg" onClick={ () => this.displayTripInput()} >Add Trip</button>   
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