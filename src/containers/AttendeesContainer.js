import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom'
import AttendeeInput from '../components/Attendee/AttendeeInput';
import Attendees from '../components/Attendee/Attendees';
import Attendee from '../components/Attendee/Attendee';


class AttendeesContainer extends React.Component {

    render() {
        let tripID = this.props && this.props.trip.id

        return (
            <div>     
                <Attendees attendees={this.props && this.props.trip.attendees} trip={this.props && this.props.trip} key={this.props && this.props.trip.id} /> 
               
                <Switch>
                    <Route path={`/trips/${tripID}/attendees/new`} component={ (routerProps) => <AttendeeInput   {...routerProps} attendees={this.props.trip.attendees}  trip={this.props.trip}  /> } />
                    <Route path={`/trips/${tripID}/attendees/:name`} render={ (routerProps) => <Attendee {...routerProps} attendees={this.props.trip.attendees}  trip={this.props.trip}  /> } />   
                    <Route path={`/trips/${tripID}/attendees`} render={ (routerProps) => <Attendees {...routerProps} attendees={this.props.trip.attendees}  trip={this.props.trip}  /> } />            
                </Switch> 
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