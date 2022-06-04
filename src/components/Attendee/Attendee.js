import React from 'react';
import { Link } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup'
import NumberFormat from "react-number-format";


const Attendee = (props) => {

    let attendee = props.attendee
    
    return (
        <ListGroup>
            <Link to={`/trips/${attendee.trip_id}/attendees/${attendee.name}/edit`} className="list-group-item list-group-item-action flex-column align-items-start" >
                <h4><div className="cursive">{attendee.name}</div></h4>
                <li><h5><i>{attendee.relationship}</i></h5></li>
                <li><span className="headers">Status </span> {attendee.status}</li> 
                <li><span className="headers">Lodging Budget: </span>
                    <NumberFormat thousandsGroupStyle="thousand" value={attendee.lodgingBudget} prefix="$" displayType="text" thousandSeparator={true} />
                </li>
                <li><span className="headers">Events Budget </span>
                    <NumberFormat thousandsGroupStyle="thousand" value={attendee.eventsBudget} prefix="$" displayType="text" thousandSeparator={true} />
                </li>
                <li><span className="headers">Notes </span> {attendee.notes}</li>
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