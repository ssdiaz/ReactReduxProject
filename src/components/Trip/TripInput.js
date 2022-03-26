import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addTrip } from '../../actions/Trips/addTrip';
import { updateTrip } from '../../actions/Trips/updateTrip';


class TripInput extends Component {

    constructor(props) {
        super(props)
        
        if (props.trip){
            let trip = props.trip

            this.state = {   
                location: trip.location,
                start_date: trip.start_date,
                end_date: trip.end_date,
                bride_id: trip.bride_id,
                attendees:trip.attendees,
                input_type: 'edit',
            }
        } else {
            this.state = {   
                location: '',
                start_date: '',
                end_date: '',
                bride_id: '',
                attendees: '',
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
        
        if (this.state.input_type === 'add') {
            this.props.addTrip(this.state)
            this.setState({   
                location: '',
                start_date: '',
                end_date: '',
                bride_id: '',
                attendees: '',
                input_type: 'add',
            })
            
        } else if (this.state.input_type === 'edit') {        
            this.props.updateTrip(this.state, this.props)
            this.props.history.push(`/trips`)
        }
    }

    render() {
        return(
            <div>
                <h3>Trip Form</h3>

                <form onSubmit={this.handleSubmit}>                       
                    <label>Location: </label>
                    <input type="text" className="Name" value={this.state.location} name="location" onChange={this.handleChange} /><br/>
                    
                    {/* <label>Start Date: </label>
                    <input type="text" className="phone" value={this.state.start_date} name="start_date" onChange={this.handleChange} /><br/>

                    <label>End Date: </label>
                    <input type="text" className="relationship"  value={this.state.end_date} name="end_date" onChange={this.handleChange} /><br/>
                    
                    <label>Bride ID: </label>
                    <input type="text" className="status" value={this.state.bride_id} name="bride_id" onChange={this.handleChange} /><br/>
                     */}
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default connect(null, {addTrip, updateTrip})(withRouter(TripInput));