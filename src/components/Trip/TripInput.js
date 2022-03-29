import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addTrip } from '../../actions/Trips/addTrip';
import { updateTrip } from '../../actions/Trips/updateTrip';


class TripInput extends Component {

    constructor(props) {
        super(props)

        if (this.props.match.params.id){
            let trip = this.findTrip()

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

    findTrip = () => {
        return this.props.trips.find(trip => trip.id == this.props.match.params.id)
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
            this.props.history.push(`/trips`)
        } else if (this.state.input_type === 'edit') {  
            let tripID = this.findTrip().id
            this.props.updateTrip(this.state, tripID)
            this.props.history.push(`/trips/${tripID}`)
        }
    }

    render() {
        return(
            <div className="alert alert-info" >
                <div className="card-body">

                    <h3>{this.state.input_type === 'add' ? 'ADD TRIP' : 'EDIT TRIP'}</h3>

                    <form onSubmit={this.handleSubmit}>                       
                        <label>Location </label>
                        <input type="text" className="form-control" value={this.state.location} name="location" onChange={this.handleChange} /><br/>
                        
                        {/* <label>Start Date: </label>
                        <input type="text" className="phone" value={this.state.start_date} name="start_date" onChange={this.handleChange} /><br/>

                        <label>End Date: </label>
                        <input type="text" className="relationship"  value={this.state.end_date} name="end_date" onChange={this.handleChange} /><br/>
                        
                        <label>Bride ID: </label>
                        <input type="text" className="status" value={this.state.bride_id} name="bride_id" onChange={this.handleChange} /><br/>
                        */}
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default connect(null, {addTrip, updateTrip})(withRouter(TripInput));