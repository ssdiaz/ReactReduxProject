import React from 'react';
import { connect } from 'react-redux';
import { deleteActivity } from '../../actions/Activity/deleteActivity';
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
            <div>
                <ActivityDetails activity={activity} />
                <button onClick={ this.displayActivityInput }>Edit</button> 
                <button onClick={ () => this.handleDelete(activity) }>Delete</button>
                
                {this.state.displayActivityInput === true ? <ActivityInput activity={activity} /> :  null }
            </div>
        )
    }
}

export default connect(null, {deleteActivity})(Activity);