import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addActivity } from '../../actions/Activity/addActivity';
import { updateActivity } from '../../actions/Activity/updateActivity';
import ActivityForm from './ActivityForm';


class ActivityInput extends Component {

    constructor(props) {
        super(props)

        if (this.props.match.params.id) {
            let activity = this.findActivity()

            this.state = {   
                name: activity.name,
                description: activity.description,
                cost:activity.cost,
                mandatory: activity.mandatory,
                priority: activity.priority,
                includeInTotal: activity.includeInTotal,
                comment: activity.comment,
                day: activity.day,
                time: activity.time,
                trip_id: activity.trip_id,
                input_type: 'edit',
            }
        } else {
            this.state = {   
                name: '',
                description: '',
                cost: 0,
                mandatory: true,
                priority: '',
                includeInTotal: true,
                comment: '',
                day: '',
                time: '',
                trip_id: props.trip.id,
                input_type: 'add',
            }
        }
    }

    findActivity = () => {
        return this.props.trip.activities.find(activity => activity.id == this.props.match.params.id)
    }
    
    handleChange = (event) => {
        this.setState({ 
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()

        let tripID = this.props.trip.id

        if (this.state.input_type === 'add') {
            this.props.addActivity(this.state, this.props)
            this.setState({
                name: '',
                description: '',
                cost: 0,
                mandatory: true,
                priority: '',
                includeInTotal: true,
                comment: '',
                day: '',
                time: '',
                trip_id: tripID,
                input_type: 'add',
            })

        } else if (this.state.input_type === 'edit') {
            let activityID = this.findActivity().id

            this.props.updateActivity(this.state, tripID, activityID)
        }

        this.props.history.push(`/trips/${tripID}`)
    }

    render() {
        return (
            <>
                <ActivityForm 
                    formData={this.state}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                />
            </>
        );
    }
}

export default connect(null, {addActivity, updateActivity})(withRouter(ActivityInput));