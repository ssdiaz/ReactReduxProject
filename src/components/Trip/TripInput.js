import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { addAttendee } from '../actions/addAttendee';
import { addTrip } from '../../actions/Trips/addTrip';

//class compoent so we can control our form; local state to control value or form data availible to redux store.
class TripInput extends Component {

    //NOTE: you're gonna wanna keep this in redux bc youre using the same form to create new and to edit...
    // constructor(props) {
        // super(props)
        state = {   
            location: '',
            start_date: '',
            end_date: '',
            bride_id: '',
            attendees: ''
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

        // console.log(this.props, 'this.props?')
        this.props.addTrip(this.state)
        this.setState({   
            location: '',
            start_date: '',
            end_date: '',
            bride_id: '',
            attendees: ''
        })
    }

    //uncontrolled comonent
    // to make this a controlled form, add a value to the form
    render() {
        return(
            <div>
                <h3>Trip Input</h3>

                <form onSubmit={this.handleSubmit}>
                    <h4>Create New Trip:</h4>
                        
                    <label>Location: </label>
                    <input type="text" className="Name" value={this.state.location} name="location" onChange={this.handleChange} /><br/>
                    
                    <label>Start Date: </label>
                    <input type="text" className="phone" value={this.state.start_date} name="start_date" onChange={this.handleChange} /><br/>

                    <label>End Date: </label>
                    <input type="text" className="relationship"  value={this.state.end_date} name="end_date" onChange={this.handleChange} /><br/>
                    
                    <label>Bride ID: </label>
                    <input type="text" className="status" value={this.state.bride_id} name="bride_id" onChange={this.handleChange} /><br/>
                    
                    <button type="submit">Create New Trip</button>
                </form>

            </div>
        )
    }


}


// export default connect(null)(TripInput);

export default connect(null, {addTrip})(TripInput);