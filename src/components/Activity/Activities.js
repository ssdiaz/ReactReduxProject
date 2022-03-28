import React from 'react';
import { Redirect } from 'react-router-dom';
import Activity from './Activity';
import ActivityInput from './ActivityInput';

class Activities extends React.Component {

    state = { 
        displayActivityInput: false
    }

    displayActivityInput = () => {
        this.setState({
            displayActivityInput: !this.state.displayActivityInput
        })
    } 

    render() { 
        return(
            <div>
                <div className="row">
                    <h3>Activities</h3>

                    {this.props.activities && this.props.activities.map(activity => 
                        <Activity activity={activity} />    
                    )}
                </div>
                
                <button className="btn btn-primary btn-lg"  onClick={this.displayActivityInput}>Add Activity</button>          
                {this.state.displayActivityInput === true  ?  <Redirect to={`/trips/${this.props.trip.id}/activities/new`} render={<ActivityInput trip={this.props.trip} />} />  :  <Redirect to={`/trips/${this.props.trip.id}`} /> }  
            </div>
        )
    }
}

export default Activities;