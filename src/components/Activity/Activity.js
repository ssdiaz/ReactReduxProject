import React from 'react';
import { connect } from 'react-redux';
import { deleteActivity } from '../../actions/Activity/deleteActivity';
import { Redirect, Route } from 'react-router-dom';
import ActivityDetails from './ActivityDetails';
import ActivityInput from './ActivityInput';


class Activity extends React.Component {

    state = {   
        displayActivityInput: false
    }

    displayActivityInput = () => {
        this.setState({
            displayActivityInput: !this.state.displayActivityInput
        })
    }

    handleDelete = (activity) => {   
        this.props.deleteActivity(activity.id, activity.trip_id) 
    }
   
    render () {
        let activity = this.props.activity

        return(
            <div className="card w-50">
                <div className="card-body">
                    <ActivityDetails activity={activity} />

                    <button className="btn btn-outline-secondary" onClick={ this.displayActivityInput }>Edit</button> 
                    <button className="btn btn-outline-danger" onClick={ () => this.handleDelete(activity) }>Delete</button>       

                    {this.state.displayActivityInput === true  ?  <Redirect to={`/trips/${activity.trip_id}/activities/${activity.id}/edit`} />  :  <Redirect to={`/trips/${activity.trip_id}`} /> } 
                </div>
            </div>
        )
    }
}

export default connect(null, {deleteActivity})(Activity);