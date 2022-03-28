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
            <div className="alert alert-info" >
                <div className="card-body">
                    <h3>{this.state.input_type === 'add' ? 'ADD ATTENDEE' : 'EDIT ATTENDEE'}</h3>

                    <form onSubmit={this.handleSubmit}>                       
                        
                        <div className="form-group row">  
                            <div className="form-group col-md-6">
                                <label> Name </label>
                                <input type="text" className="form-control" placeholder='Name' value={this.state.name} name="name" onChange={this.handleChange} /><br/>
                            </div>
                                
                            <div className="form-group col-md-6">
                                <label> Phone Number </label>
                                <input type="text" className="form-control" placeholder='Phone Number' value={this.state.phone} name="phone" onChange={this.handleChange} /><br/>
                            </div>
                        </div>

                        <div className="form-group row">    
                            <div className="form-group col-md-6">  
                                <label> Relationship </label>
                                <select className="form-control"  value={this.state.relationship} name="relationship" onChange={this.handleChange} >
                                    <option defaultValue value='Attende'>Attendee</option>                    
                                    <option value ='Bride'> Bride </option>
                                    <option value ='Bridesmaid'> Bridesmaid </option>
                                    <option value ='Maid of Honor'> Maid of Honor </option>
                                    <option value ='Matron of Honor'> Matron of Honor </option>
                                </select><br/>
                            </div>
                                
                            <div className="form-group col-md-6">   
                                <label> Status </label>
                                <select className="form-control" value={this.state.status} name="status" onChange={this.handleChange} >
                                    <option defaultValue value=''> </option>                    
                                    <option value ='Confirmed'>Confirmed</option>
                                    <option value ='Maybe'>Maybe</option>
                                    <option value ='Not Coming'>Not Coming</option>
                                </select><br/>
                            </div>
                        </div>   

                        <div className="form-group row">
                            <div className="form-group col-md-6">   
                                <label> Lodging Budget </label>
                                <input type="text" className="form-control" placeholder='Lodging Budget' value={this.state.lodgingBudget} name="lodgingBudget" onChange={this.handleChange} /><br/>
                            </div>
                                
                            <div className="form-group col-md-6">   
                                <label> Events Budget </label>
                                <input type="text" className="form-control" placeholder='Events Budget' value={this.state.eventsBudget} name="eventsBudget" onChange={this.handleChange} /><br/>
                            </div>
                        </div>


                        <div className="form-group">    
                            <label> Notes </label>
                            <textarea type="text" className="form-control" placeholder='Notes' value={this.state.notes} name="notes" onChange={this.handleChange} /><br/>
                        </div>
                        
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default connect(null, {addAttendee, updateAttendee})(withRouter(AttendeeInput));