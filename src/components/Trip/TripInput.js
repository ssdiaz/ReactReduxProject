import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addTrip } from '../../actions/Trips/addTrip';
import { updateTrip } from '../../actions/Trips/updateTrip';
import TripForm from './TripForm';

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
            <TripForm 
                formData={this.state}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
            />
        )
    }
}

export default connect(null, {addTrip, updateTrip})(withRouter(TripInput));