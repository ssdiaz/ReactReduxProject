import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addAttendee } from '../../actions/Attendee/addAttendee';
import { updateAttendee } from '../../actions/Attendee/updateAttendee';
import AttendeeForm from './AttendeeForm';


class AttendeeInput extends React.Component { 
        
    constructor(props) {
        super(props)

        if (this.props.match.params.name) {   
            let attendee = this.findAttendee()

            this.state = {   
                name: attendee.name,
                phone: attendee.phone,
                status: attendee.status,
                notes: attendee.notes,
                relationship: attendee.relationship,
                lodgingBudget: attendee.lodgingBudget,
                eventsBudget: attendee.eventsBudget,
                trip_id: attendee.trip_id,
                input_type: 'edit',
            }
        } else {   
            this.state = { 
                name: '',
                phone: '',
                status: '',
                notes: '',
                relationship: 'Attendee',
                lodgingBudget: 0,
                eventsBudget: 0,
                trip_id: props.trip.id,
                input_type: 'add',
            }
        }
    }

    findAttendee = () => {
        return this.props.trip.attendees.find(attendee => attendee.name == this.props.match.params.name)
    }
    
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    handleSubmit = (event) => {
        event.preventDefault() 

        let tripID = this.props.trip.id 
        
        if (this.state.input_type === 'add') {  
            this.props.addAttendee(this.state, this.props)
            this.setState({
                name: '',
                phone: '',
                status: '',
                notes: '',
                relationship: 'Attendee',
                lodgingBudget: 0,
                eventsBudget: 0,
                trip_id: tripID,
                input_type: 'add',
            })
        } else if (this.state.input_type === 'edit') {         
            let attendeeID = this.findAttendee().id
            this.props.updateAttendee(this.state, tripID, attendeeID)
        }

        this.props.history.push(`/trips/${tripID}`)
    }

    render() {
        return(
                <>
                    <AttendeeForm
                        formData={this.state}
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit} 
                    />
                </>
        )
    }
}

export default connect(null, {addAttendee, updateAttendee})(withRouter(AttendeeInput));