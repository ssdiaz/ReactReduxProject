import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTrips } from '../actions/Trips/fetchTrips';

class TripsContainer extends Component {

    componentDidMount() {
        this.props.fetchTrips() 
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

const mapStateToProps = state => { 
    // console.log(state.tripReducer.trips.length, 'state!')
    return {
        trips: state.tripReducer.trips
    }
}


export default connect(mapStateToProps, {fetchTrips})(TripsContainer);