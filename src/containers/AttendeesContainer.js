import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom'
import Attendees from '../components/Attendee/Attendees';
import Attendee from '../components/Attendee/Attendee';
import AttendeeInput from '../components/Attendee/AttendeeInput';


class AttendeesContainer extends React.Component {
    render() {
        let trip = this.props.trip && this.props.trip

        return (
            <div>     
                <Attendees attendees={trip.attendees} trip={trip} key={trip.id} /> 

                <Route path={`/trips/:trip_id/attendees/new`} render={ (routerProps) => <AttendeeInput {...routerProps} trip={trip} /> } /> 
                <Route path={`/trips/:trip_id/attendees/:name`} render={ (routerProps) => <Attendee {...routerProps} trip={trip} /> } /> 
                <Route path='/trips/:trip_id/attendees/:name/edit' render={ (routerProps) => <AttendeeInput {...routerProps} trip={trip} /> } /> 
            </div>
        );
    }
}

const mapStateToProps = (state) => { 
    return {
        ...state
    }
}

export default connect(mapStateToProps)(AttendeesContainer);