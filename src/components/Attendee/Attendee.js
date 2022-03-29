import React from 'react';
import { connect } from 'react-redux';
import { deleteAttendee } from '../../actions/Attendee/deleteAttendee';
import AttendeeInput from './AttendeeInput';
import AttendeeDetail from './AttendeeDetails';


class Attendee extends React.Component {
  
    state = { 
        displayAttendeeInput: false
    }
    
    displayAttendeeInput = () => {
        this.setState({
            displayAttendeeInput: !this.state.displayAttendeeInput
        })
    }

    handleDelete = (attendee) => {
        this.props.deleteAttendee(attendee.id, this.props.trip.id)
        this.props.history.push(`/trips/${this.props.trip.id}`)
    }

    render() { 
        let attendee = this.props.trip.attendees.find(attendee => attendee.name === this.props.match.params.name)

        return (
            <div>      
                <AttendeeDetail attendee={attendee} />
         
                <button className="btn btn-outline-secondary" onClick={ this.displayAttendeeInput }>Edit</button>                    
                <button className="btn btn-outline-danger" onClick={ () => this.handleDelete(attendee) }>Delete</button>

                {this.state.displayAttendeeInput === true ? <AttendeeInput attendee={attendee} /> :  null } 
            </div>
        );
    }
}

export default connect(null, {deleteAttendee})(Attendee);
