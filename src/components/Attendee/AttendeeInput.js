import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addAttendee } from '../../actions/Attendee/addAttendee';
import { updateAttendee } from '../../actions/Attendee/updateAttendee';


class AttendeeInput extends React.Component { 
        
    constructor(props) {
        super(props)
        
        if (props.attendee) {   
            let attendee = props.attendee

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
                phone: '5555555555',
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

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    handleSubmit = (event) => {
        event.preventDefault() 
        
        let tripID;  
        
        if (this.state.input_type === 'add') {
            tripID = this.props.trip.id       
            this.props.addAttendee(this.state, this.props)
            this.setState({
                name: '',
                phone: '5555555555',
                status: '',
                notes: '',
                relationship: 'Attendee',
                lodgingBudget: 0,
                eventsBudget: 0,
                trip_id: tripID,
                input_type: 'add',
            })

        } else if (this.state.input_type === 'edit') {         
            tripID = this.props.attendee.trip_id
            this.props.updateAttendee(this.state, this.props)
        }

        this.props.history.push(`/trips/${tripID}`)
    }

    render() {
        return(
            <div>
                <h3>{this.state.input_type === 'add' ? 'ADD ATTENDEE' : 'EDIT ATTENDEE'}</h3>

                <form onSubmit={this.handleSubmit}>                       
                    <label>Name: </label>
                    <input type="text" className="Name" placeholder='Name' value={this.state.name} name="name" onChange={this.handleChange} /><br/>
                    
                    <label>Phone Number: </label>
                    <input type="text" className="phone" placeholder='Phone Number' value={this.state.phone} name="phone" onChange={this.handleChange} /><br/>

                    <label>Relationship: </label>
                    <select className="relationship"  value={this.state.relationship} name="relationship" onChange={this.handleChange} >
                        <option defaultValue value='Attende'>Attende</option>                    
                        <option value ='Bride'>Bride</option>
                        <option value ='Bridesmaid'>Bridesmaid</option>
                        <option value ='Maid of Honor'>Maid of Honor</option>
                        <option value ='Matron of Honor'>Matron of Honor</option>
                    </select><br/>

                    <label>Status: </label>
                    <select className="status" value={this.state.status} name="status" onChange={this.handleChange} >
                        <option defaultValue value=''> </option>                    
                        <option value ='Confirmed'>Confirmed</option>
                        <option value ='Maybe'>Maybe</option>
                        <option value ='Not Coming'>Not Coming</option>
                    </select><br/>

                    <label>Lodging Budget: </label>
                    <input type="text" className="lodgingBudget" placeholder='Lodging Budget' value={this.state.lodgingBudget} name="lodgingBudget" onChange={this.handleChange} /><br/>
                    
                    <label>Events Budget: </label>
                    <input type="text" className="eventsBudget" placeholder='Events Budget' value={this.state.eventsBudget} name="eventsBudget" onChange={this.handleChange} /><br/>
                    
                    <label>Notes: </label>
                    <textarea type="text" className="notes" placeholder='Notes' value={this.state.notes} name="notes" onChange={this.handleChange} /><br/>
             
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default connect(null, {addAttendee, updateAttendee})(withRouter(AttendeeInput));