import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTrips } from '../actions/Trips/fetchTrips';
import AttendeesContainer from '../containers/AttendeesContainer';
import ActivitiesContainer from '../containers/ActivitiesContainer';

class TripsContainer extends Component {

    componentDidMount() {
        this.props.fetchTrips() 
        console.log(this.props)
    }


    render() {
        return (
            <div>

                <h3>Trip Details:</h3>
                {this.props.trips.map( (trip, index) => 
                    <div>
                        <h4>Trip {index+1}:</h4>
                        <ul key={trip.id}>
                            <li>Location: {trip.location}</li>
                            <li>Start Date: {trip.start_date}</li>
                            <li>End Date: {trip.end_date}</li>
                        </ul>
                    </div>
                )}

                <AttendeesContainer />
                <ActivitiesContainer />
                
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