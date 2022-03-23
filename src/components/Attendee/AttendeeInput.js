import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addAttendee } from '../../actions/Attendee/addAttendee';


class AttendeeInput extends Component {                                         //class compoent so we can control our form; local state to control value or form data availible to redux store.
        
    constructor(props) {                                                         //NOTE: you're want this in redux bc youre using the same form to create new and to edit...
        // console.log(props, 'constructor')    
        super(props)
        this.state = {   
            name: '',
            phone: '5555555555',
            status: '',
            notes: '',
            relationship: 'Attendee',
            lodgingBudget: null,
            eventsBudget: null,
            // trip_id: props.trip.id,
        }
    }

    handleChange = (event) => {
        this.setState({                                                             //setState is asynchrounus - won't clear out state until rest of function has ran
            [event.target.name]: event.target.value
        })
    }
    
    handleSubmit = (event) => {
        //use an action creator to send the user's inputs from the form to the backend database
        event.preventDefault() //so we don't lose our form data before the re-render
        // console.log(this.state, 'state')
        // console.log(this.props, 'props')

        this.props.addAttendee(this.state, this.props.trip.id)
        this.setState({
            name: '',
            phone: '',
            status: '',
            notes: '',
            relationship: '',
            lodgingBudget: null,
            eventsBudget: null,
            trip_id: this.props.trip.id,
        })
        // this.props.history.push({`/trips/${this.props.trip.id}/attendees/new`}); //https://stackoverflow.com/questions/44522811/how-to-redirect-to-home-page-after-submitting-redux-form
    }

    //uncontrolled comonent
    // to make this a controlled form, add a value to the form
    render() {
        return(
            <div>
                <h3>Attendees Input</h3>

                <h4>Create New Attendee:</h4>

                <form onSubmit={this.handleSubmit}>
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
                    <textarea type="text" className="notes" placeholder='Notes' value={this.state.notes} name="notes" onChange={this.handleChange} /><br/>
             
                    <button type="submit">Create New Attendee</button>
                </form>
            </div>
        )
    }
}

export default connect(null, {addAttendee})(AttendeeInput);


// const mapStateToProps = state => { 
//     // console.log(state, 'state! map here')
//     console.log(state.tripReducer.trips, 'state!')
//     return {
//         trips: state.tripReducer.trips
//     }
// }




// export default connect(null)(AttendeeInput);
// export default connect(mapStateToProps, {addAttendee})(AttendeeInput);


