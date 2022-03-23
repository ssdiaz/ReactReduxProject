import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTrips } from '../actions/Trips/fetchTrips';
import AttendeesContainer from '../containers/AttendeesContainer';
import ActivitiesContainer from '../containers/ActivitiesContainer';
// import { updateAttendees } from '../actions/Attendee/updateAttendees';

class TripsContainer extends Component {

    componentDidMount() {
        this.props.fetchTrips() 
        console.log(this.props, 'props?')
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
                            {/* <li>attendee {trip.attendees.map(att => att.name)}</li> */}
                            <AttendeesContainer trip={trip} />
                        </ul>
                    </div>
                )}

                {/* <ActivitiesContainer /> */}

            </div>
        );
    }
}

const mapStateToProps = state => { 
    // console.log(state, 'state!')
    // console.log(state.tripReducer.trips.length, 'state!')
    console.log(state.tripReducer.trips, 'state! trip')
    return {
        trips: state.tripReducer.trips
        // attendees: state.tripReducer.trips
    }
}


export default connect(mapStateToProps, {fetchTrips})(TripsContainer);