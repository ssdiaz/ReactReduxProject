import React from 'react';
import { Link } from 'react-router-dom'
import AttendeeInput from './AttendeeInput';
import ListGroup from 'react-bootstrap/ListGroup'


class Attendees extends React.Component {

    state = { 
        displayAttendeeInput: false
    }

    displayAttendeeInput = () => {
        this.setState({
            displayAttendeeInput: !this.state.displayAttendeeInput
        })
    } 

    render() {
        return(  
            <div> 
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
                {this.state.displayAttendeeInput === true ? <AttendeeInput trip={this.props.trip} key={this.props.trip.id}   /> :  null }  
            </div> 
        )
    }
}

export default Attendees;