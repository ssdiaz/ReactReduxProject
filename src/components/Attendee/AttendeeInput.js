import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addAttendee } from '../../actions/Attendee/addAttendee';
import { updateAttendee } from '../../actions/Attendee/updateAttendee';


class AttendeeInput extends React.Component {                                         //class compoent so we can control our form; local state to control value or form data availible to redux store.
            
    constructor(props) {          //NOTE: you're want this in redux bc youre using the same form to create new and to edit...
      
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
                trip_id: attendee.trip_id,
                input_type: 'edit',
            }

        } else {        //ADD attendee
            super(props)
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
        this.setState({                                  //setState is asynchrounus - won't clear out state until rest of function has ran
            [event.target.name]: event.target.value
        })
    }
    
    handleSubmit = (event) => {  //use an action creator to send the user's inputs from the form to the backend database
        event.preventDefault() 

        let tripID;                
        
        if (this.state.input_type === 'add'){   // 'ADD NEW ATTENDEE'
            tripID = this.props.trip.id            
            this.props.addAttendee(this.state, this.props) //=> trip only in props

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

        } else if (this.state.input_type === 'edit') {  // 'EDIT ATTENDEE'          
            tripID = this.props.attendee.trip_id
            this.props.updateAttendee(this.state, this.props) //=> attendee only in props
        }

        this.props.history.push(`/trips/${tripID}`)

    }

    render() {      // to make this a controlled form, add a value to the form
        // console.log(this.state, 'state')
        // console.log(this.props, 'props')

        return(
            <div>
                <h3>{this.state.input_type === 'edit' ? 'EDIT ATTENDEE' : 'ADD ATTENDEE'}</h3>

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






















        // this.setState({
        //     name: 'is it htis?',
        //     phone: '5555555555',
        //     status: '',
        //     notes: '',
        //     relationship: 'Attendee',
        //     lodgingBudget: 0,
        //     eventsBudget: 0,
        //     trip_id: tripID,
        //     input_type: 'add',
        // })