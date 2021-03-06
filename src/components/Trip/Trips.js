import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

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
            <>
                <h1>Trips</h1>
                <div className="card">
                {/* <div id="trip"> */}
                    {this.props.trips && this.props.trips.map( (trip, index) => 
                        <div className="card-body" key={index}>
                            <Link to={`/trips/${trip.id}`} className="btn btn-info" id="trip" > {trip.location} </Link>
                        </div>
                    )} 
                </div>
                    
                <button className="btn btn-primary btn-lg" onClick={ () => this.displayTripInput()} > Add Trip </button>   
                {this.state.displayTripInput === true ?  <Redirect to='/trips/new'/> :  null }
            </>
        )
    }
}

const mapStateToProps = state => { 
    return {
        trips: state.trips,
    }
}

export default connect(mapStateToProps)(Trips);