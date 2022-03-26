import React from 'react';
import { Link } from 'react-router-dom'
import AttendeeInput from './AttendeeInput';


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
                    <li key={attendee.name}>
                        <Link to={`/trips/${attendee.trip_id}/attendees/${attendee.name}`} >{attendee.name}</Link>
                        {/* <Link to={`/trips/${attendee.trip_id}/attendees/${attendee.name}`} attendee={attendee} key={attendee.name} >{attendee.name}</Link> */}
                    </li>          
                )} 
                
                <button onClick={this.displayAttendeeInput}>Add Attendee</button>  
                {this.state.displayAttendeeInput == true ? <AttendeeInput trip={this.props.trip} key={this.props.trip.id}   /> :  null }  
            </div>
        )
    }
}

export default Attendees;