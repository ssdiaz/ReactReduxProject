import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addAttendee } from '../actions/addAttendee';


//class compoent so we can control our form; local state to control value or form data availible to redux store.
class AttendeesInput extends Component {

    //NOTE: you're gonna wanna keep this in redux bc youre using the same form to create new and to edit...
    // constructor(props) {
        // super(props)
        state = {   
            name: '',
            phone: '',
            status: '',
            notes: '',
            relationship: '',
            lodgingBudget: null,
            eventsBudget: null,
        }
    // }


    handleChange = event => {
        // debugger
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        //use an action creator to send the user's inputs from the form to the backend database
        event.preventDefault() //so we don't lose our form data before the re-render
        this.props.addAttendee(this.state)
    }

    //uncontrolled comonent
    // to make this a controlled form, add a value to the form
    render() {
        return(
            <div>
                <h3>Attendees Input</h3>

                <form onSubmit={this.handleSubmit}>
                    <h4>Create New Attendee:</h4>
                    {/* <label htmlFor="new">Create New Attendeee</label> */}
                        
                    <label>Name: </label>
                    <input type="text" className="Name" placeholder='Name' value={this.state.name} name="name" onChange={this.handleChange} /><br/>
                    
                    <label>Phone Number: </label>
                    <input type="text" className="phone" placeholder='Phone Number' value={this.state.phone} name="phone" onChange={this.handleChange} /><br/>

                    <label>Relationship: </label>
                    <input type="text" className="relationship" placeholder='Relationship' value={this.state.relationship} name="relationship" onChange={this.handleChange} /><br/>
                    
                    <label>Status: </label>
                    <input type="text" className="status" placeholder='Status' value={this.state.status} name="status" onChange={this.handleChange} /><br/>
                    
                    <label>Lodging Budget: </label>
                    <input type="text" className="lodgingBudget" placeholder='Lodging Budget' value={this.state.lodgingBudget} name="lodgingBudget" onChange={this.handleChange} /><br/>
                    
                    <label>Events Budget: </label>
                    <input type="text" className="eventsBudget" placeholder='Events Budget' value={this.state.eventsBudget} name="eventsBudget" onChange={this.handleChange} /><br/>
                    
                    <label>Notes: </label>
                    <input type="text" className="notes" placeholder='Notes' value={this.state.notes} name="notes" onChange={this.handleChange} /><br/>


                    <button type="submit">Create New Attendee</button>

                </form>

            </div>
        )
    }


}


export default connect(null, {addAttendee})(AttendeesInput);


