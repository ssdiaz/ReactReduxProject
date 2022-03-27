import React from 'react';
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
                
                <button className="btn btn-primary btn-lg" onClick={this.displayActivityInput}>Add Activity</button>          
                {this.state.displayActivityInput === true ? <ActivityInput trip={this.props.trip} key={this.props.trip.id} /> :  null }  
            </div>
        )
    }
}

export default Activities;