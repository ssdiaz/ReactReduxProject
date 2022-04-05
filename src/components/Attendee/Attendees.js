import React from 'react';
import { Link, Redirect } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import ListGroup from 'react-bootstrap/ListGroup'
import Attendee from './Attendee';


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
                <h3>Attendees</h3>
                <CardGroup>
                    <Card>
                        <Card.Body>
                            <Card.Title>Coming</Card.Title>
                            <Card.Text>Count: {attendeesConfirmed.length}</Card.Text>
                            {attendeesConfirmed.map( attendee =>     
                                <Attendee attendee={attendee} />
                            )}
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Body>
                            <Card.Title>Maybe</Card.Title>
                            <Card.Text>Count: {attendeesMaybe.length}</Card.Text>
                            {attendeesMaybe.map( attendee =>     
                                <Attendee attendee={attendee} />
                            )}
                        </Card.Body>
                    </Card>
                    
                    <Card>
                        <Card.Body>
                            <Card.Title>Not Coming</Card.Title>
                            <Card.Text>Count: {attendeesNotComing.length}</Card.Text>
                            {attendeesNotComing.map( attendee =>     
                                <Attendee attendee={attendee} />
                            )}
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Body>
                            <Card.Title>Not Yet Responded</Card.Title>
                            <Card.Text>Count: {attendeesNotResponded.length}</Card.Text>
                            {attendeesNotResponded.map( attendee =>     
                                <Attendee attendee={attendee} />
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