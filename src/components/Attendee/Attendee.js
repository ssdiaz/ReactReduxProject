import React from 'react';
import { Link } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup'
import NumberFormat from "react-number-format";


const Attendee = (props) => {

    let attendee = props.attendee
    
    return (
        <ListGroup as="ol" numbered>
            <Link to={`/trips/${attendee.trip_id}/attendees/${attendee.name}/edit`} className="list-group-item list-group-item-action flex-column align-items-start" >
                <div className="fw-bold">{attendee.name}</div>
                <li><i>{attendee.relationship}</i></li>
                <li>Status: {attendee.status}</li>
                <li>Lodging Budget: 
                    <NumberFormat thousandsGroupStyle="thousand" value={attendee.lodgingBudget} prefix="$" displayType="text" thousandSeparator={true} />
                </li>
                <li>Events Budget:   
                    <NumberFormat thousandsGroupStyle="thousand" value={attendee.eventsBudget} prefix="$" displayType="text" thousandSeparator={true} />
                </li>
                <li>Notes: {attendee.notes}</li>
            </Link>
        </ListGroup>
    );
}

export default Attendee;












// render() { 
//     let attendee = this.props.trip.attendees.find(attendee => attendee.name === this.props.match.params.name)
    // let attendee = this.props.trip.attendees.find(attendee => attendee.name === this.props.match.params.name)

//     return (
    
//         <div className="card w-100">
//             <div className="card-body">
//                 {attendee ? <AttendeeDetail attendee={attendee} /> : null }   
     
//                 <button className="btn btn-outline-secondary" onClick={ this.displayAttendeeInput }>Edit</button>                    
//                 <button className="btn btn-outline-danger" onClick={ () => this.handleDelete(attendee) }>Delete</button>

//                 {this.state.displayAttendeeInput === true ? <Redirect to={`/trips/${attendee.trip_id}/attendees/${attendee.name}/edit`} /> : null } 
//             </div>
//         </div>
//     );
// }