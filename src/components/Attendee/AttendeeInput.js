import React from 'react';
import { connect } from 'react-redux';
import { addAttendee } from '../../actions/Attendee/addAttendee';
import { updateAttendee } from '../../actions/Attendee/updateAttendee';

class AttendeeInput extends React.Component {                                         //class compoent so we can control our form; local state to control value or form data availible to redux store.
        
    constructor(props) {                                                         //NOTE: you're want this in redux bc youre using the same form to create new and to edit...
        // console.log(props, 'constructor')
        if (props.attendee) {   //EDIT attendee
            super(props)

            let attendee = props.attendee
            this.state = {   
                name: attendee.name,
                phone: attendee.phone,
                status: attendee.status,
                notes: attendee.notes,
                relationship: attendee.relationship,
                lodgingBudget: attendee.lodgingBudget,
                eventsBudget: attendee.eventsBudget,
                trip_id: attendee.trip_id,    // trip_id: props.trip.id,
                input_type: 'edit',
            }

        } else { //add attendee
            // console.log(props, 'props')
            super(props)
            this.state = {   
                name: '',
                phone: '5555555555',
                status: '',
                notes: '',
                relationship: 'Attendee',
                lodgingBudget: 0,
                eventsBudget: 0,                
                trip_id: props.trip.id,    // trip_id: props.trip.id,
                input_type: 'add',
            }
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

        console.log(this.props, 'props') //=> attendee only in props
        console.log(this.state, 'state') //=> attendee only in props
        
        // this.props.addAttendee(this.state, this.props.trip.id)
        
        
        
        if (this.state.input_type === 'add'){
            // this.props.addAttendee(this.state, this.props.trip.id)
            this.props.addAttendee(this.state, this.props) //=> trip only in props
            // 'ADD NEW ATTENDEE'
        } else {
            // 'EDIT ATTENDEE'
            // console.log('IN EDIT')
            
            // console.log(this.props, 'props') 
            this.props.updateAttendee(this.state, this.props) //=> attendee only in props
        }


        this.setState({
            name: '',
            phone: '5555555555',
            status: '',
            notes: '',
            relationship: 'Attendee',
            lodgingBudget: 0,
            eventsBudget: 0,
            trip_id: this.props.trip.id,
            input_type: 'add',
        })
        // this.props.history.push({`/trips/${this.props.trip.id}/attendees/new`}); //https://stackoverflow.com/questions/44522811/how-to-redirect-to-home-page-after-submitting-redux-form
    }

    render() {      // to make this a controlled form, add a value to the form
        return(
            <div>
                <h3>{this.state.input_type === 'add' ? 'ADD NEW ATTENDEE' : 'EDIT ATTENDEE'}</h3>

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
                    {/* <input type="text" className="status" placeholder='Status' value={this.state.status} name="status" onChange={this.handleChange} /><br/> */}
                    <select className="status" value={this.state.status} name="status" onChange={this.handleChange} >
                    {/* <select className="relationship"  value={this.state.relationship} name="relationship" onChange={this.handleChange} > */}
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

export default connect(null, {addAttendee, updateAttendee})(AttendeeInput);
