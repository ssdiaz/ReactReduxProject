import React from 'react';
import { Link, Redirect } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Attendee from './Attendee';
import Accordion from 'react-bootstrap/Accordion'

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
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header><h5>Confirmed</h5></Accordion.Header>
                                <Card.Body>
                                    <Card.Text><h6>Count: {attendeesConfirmed.length}</h6></Card.Text>
                                    <Accordion.Body> 
                                        {attendeesConfirmed.map( attendee =>     
                                            <Attendee attendee={attendee} />
                                        )}
                                    </Accordion.Body> 
                                </Card.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Card>

                    <Card>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header><h5>Maybe</h5></Accordion.Header>
                                <Card.Body>
                                    <Card.Text><h6>Count: {attendeesMaybe.length}</h6></Card.Text>
                                    <Accordion.Body> 
                                        {attendeesMaybe.map( attendee =>     
                                            <Attendee attendee={attendee} />
                                        )}
                                    </Accordion.Body> 
                                </Card.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Card>

                    <Card>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header><h5>Not Coming</h5></Accordion.Header>
                                <Card.Body>
                                    <Card.Text><h6>Count: {attendeesNotComing.length}</h6></Card.Text>
                                    <Accordion.Body> 
                                        {attendeesNotComing.map( attendee =>     
                                            <Attendee attendee={attendee} />
                                        )}
                                    </Accordion.Body> 
                                </Card.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Card>

                    { attendeesNotResponded.length === 0  ?  null  :  
                        <Card>
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header><h5>Not Yet Responded</h5></Accordion.Header>
                                    <Card.Body>
                                        <Card.Text><h6>Count: {attendeesNotResponded.length}</h6></Card.Text>
                                        <Accordion.Body> 
                                            {attendeesNotResponded.map( attendee =>     
                                                <Attendee attendee={attendee} />
                                            )}
                                        </Accordion.Body> 
                                    </Card.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Card>
                    }
                </CardGroup>

                <button className="btn btn-primary btn-lg" onClick={this.displayAttendeeInput}>Add Attendee</button> 
                {this.state.displayAttendeeInput === true ?  <Redirect to={`/trips/${this.props.trip.id}/attendees/new`} />  :  <Redirect to={`/trips/${this.props.trip.id}`} />  }  
            </>
        )
    }
}

export default Attendees;




{/* <Accordion defaultActiveKey={['0']} alwaysOpen>
<Accordion.Item eventKey="0">
    <Accordion.Header><h3>Attendees</h3></Accordion.Header>
    <Accordion.Body>

        <CardGroup>
            <Card>
                <Card.Body>
                    <Card.Title>Confirmed</Card.Title>
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

            { attendeesNotResponded.length === 0 ? null :     
                <Card>
                    <Card.Body>
                        <Card.Title>Not Yet Responded</Card.Title>
                        <Card.Text>Count: {attendeesNotResponded.length}</Card.Text>
                        {attendeesNotResponded.map( attendee =>     
                            <Attendee attendee={attendee} />
                        )}
                    </Card.Body>
                </Card>
            }
        </CardGroup>

    </Accordion.Body>
</Accordion.Item>
</Accordion> */}