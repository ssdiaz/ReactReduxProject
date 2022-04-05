import React from 'react';
import { connect } from 'react-redux';
import { deleteActivity } from '../../actions/Activity/deleteActivity';
import { Redirect, Route } from 'react-router-dom';
import ActivityDetails from './ActivityDetails';
import Table from 'react-bootstrap/Table'

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
            <tbody>
                <ActivityDetails activity={this.props.activity} index={this.props.index} />

                <td><button className="btn btn-outline-secondary" onClick={ this.displayActivityInput }>Edit</button></td>
                <td><button className="btn btn-outline-danger" onClick={ () => this.handleDelete(activity) }>Delete</button></td>

                {this.state.displayActivityInput === true  ?  <Redirect to={`/trips/${activity.trip_id}/activities/${activity.id}/edit`} />  :  <Redirect to={`/trips/${activity.trip_id}`} /> } 
            </tbody>
        )
    }
}

export default connect(null, {deleteActivity})(Activity);