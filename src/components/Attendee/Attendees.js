import React from 'react';
import { Route, Link, Redirect } from 'react-router-dom'
import AttendeeInput from './AttendeeInput';
import ListGroup from 'react-bootstrap/ListGroup'
import TripInput from '../Trip/TripInput';


class Attendees extends React.Component {

    constructor() {
        super()
        this.state = {
            displayAttendeeInput: false
        }
    }
 
    displayAttendeeInput = () => {
        this.setState({
            displayAttendeeInput: !this.state.displayAttendeeInput
        })
    } 

    render() {
        console.log(this.state.displayAttendeeInput, 'state')
        return(  
            <> 
                <h3>Attendees</h3>

                {this.props.attendees && this.props.attendees.map(attendee => 
                    <ListGroup as="ol" numbered>
                        <Link to={`/trips/${attendee.trip_id}/attendees/${attendee.name}`} className="list-group-item list-group-item-action flex-column align-items-start" >
                            <div className="fw-bold">{attendee.name}</div>
                            <li>Relationship: {attendee.relationship}</li>
                            <li>Status: {attendee.status}</li>
                        </Link>
                    </ListGroup>
                )} 
            
                <button className="btn btn-primary btn-lg" onClick={this.displayAttendeeInput}>Add Attendee</button> 
                {this.state.displayAttendeeInput === true ?  <Redirect to={`/trips/${this.props.trip.id}/attendees/new`} /> :  <Redirect to={`/trips/${this.props.trip.id}`} />  }  
            </> 
        )
    }
}

export default Attendees;