import React from 'react';
import { Route, Link, Redirect } from 'react-router-dom'
import Attendee from './Attendee';
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import ListGroup from 'react-bootstrap/ListGroup'


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
            const attendees = this.props.attendees

            let attendeesConfirmed = attendees.filter( attendee => attendee.status === 'Confirmed')
            let attendeesMaybe = attendees.filter( attendee => attendee.status === 'Maybe')
            let attendeesNotComing = attendees.filter( attendee => attendee.status === 'Not Coming')
            let attendeesNotResponded = attendees.filter( attendee => attendee.status === '')

        
        return(  
            <>
                <CardGroup>
                    <Card>
                        <Card.Body>
                            <Card.Title>Coming</Card.Title>
                            {attendeesConfirmed.map( attendee =>     
                                <ListGroup as="ol" numbered>
                                        <Link to={`/trips/${attendee.trip_id}/attendees/${attendee.name}`} className="list-group-item list-group-item-action flex-column align-items-start" >
                                            <div className="fw-bold">{attendee.name}</div>
                                            <li>Relationship: {attendee.relationship}</li>
                                            <li>Status: {attendee.status}</li>
                                        </Link>
                                </ListGroup>
                            )}
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Body>
                            <Card.Title>Maybe</Card.Title>
                            {attendeesMaybe.map( attendee =>     
                                <ListGroup as="ol" numbered>
                                        <Link to={`/trips/${attendee.trip_id}/attendees/${attendee.name}`} className="list-group-item list-group-item-action flex-column align-items-start" >
                                            <div className="fw-bold">{attendee.name}</div>
                                            <li>Relationship: {attendee.relationship}</li>
                                            <li>Status: {attendee.status}</li>
                                        </Link>
                                </ListGroup>
                            )}
                        </Card.Body>
                    </Card>
                    
                    <Card>
                        <Card.Body>
                            <Card.Title>Not Coming</Card.Title>
                            {attendeesNotComing.map( attendee =>     
                                <ListGroup as="ol" numbered>
                                        <Link to={`/trips/${attendee.trip_id}/attendees/${attendee.name}`} className="list-group-item list-group-item-action flex-column align-items-start" >
                                            <div className="fw-bold">{attendee.name}</div>
                                            <li>Relationship: {attendee.relationship}</li>
                                            <li>Status: {attendee.status}</li>
                                        </Link>
                                </ListGroup>
                            )}
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Body>
                            <Card.Title>Not Yet Responded</Card.Title>
                            {attendeesNotResponded.map( attendee =>     
                                <ListGroup as="ol" numbered>
                                        <Link to={`/trips/${attendee.trip_id}/attendees/${attendee.name}`} className="list-group-item list-group-item-action flex-column align-items-start" >
                                            <div className="fw-bold">{attendee.name}</div>
                                            <li>Relationship: {attendee.relationship}</li>
                                            <li>Status: {attendee.status}</li>
                                        </Link>
                                </ListGroup>
                            )}
                        </Card.Body>
                    </Card>
                </CardGroup>
            
                <button className="btn btn-primary btn-lg" onClick={this.displayAttendeeInput}>Add Attendee</button> 
                {this.state.displayAttendeeInput === true ?  <Redirect to={`/trips/${this.props.trip.id}/attendees/new`} /> :  <Redirect to={`/trips/${this.props.trip.id}`} />  }  
            </>
        )
    }
}

export default Attendees;