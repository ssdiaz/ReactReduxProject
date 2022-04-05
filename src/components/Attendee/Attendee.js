import React from 'react';
import { connect } from 'react-redux';
// import { deleteAttendee } from '../../actions/Attendee/deleteAttendee';
import { Link } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup'
import NumberFormat from "react-number-format";


class Attendee extends React.Component {
  
    // state = { 
    //     displayAttendeeInput: false
    // }
    
    // displayAttendeeInput = () => {
    //     this.setState({
    //         displayAttendeeInput: !this.state.displayAttendeeInput
    //     })
    // }

    // handleDelete = (attendee) => {
    //     this.props.deleteAttendee(attendee.id, this.props.trip.id)
    //     this.props.history.push(`/trips/${this.props.trip.id}`)
    // }

    render() { 
        let attendee = this.props.attendee
        // let attendee = this.props.trip.attendees.find(attendee => attendee.name === this.props.match.params.name)

        return (
            <ListGroup as="ol" numbered>
                <Link to={`/trips/${attendee.trip_id}/attendees/${attendee.name}/edit`} className="list-group-item list-group-item-action flex-column align-items-start" >
                    <div className="fw-bold">{attendee.name}</div>
                    <li>{attendee.relationship}</li>
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
}

// export default connect(null, {deleteAttendee})(Attendee);
export default connect(null)(Attendee);











// render() { 
//     let attendee = this.props.trip.attendees.find(attendee => attendee.name === this.props.match.params.name)

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