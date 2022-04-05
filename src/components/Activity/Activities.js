import React from 'react';
import { Redirect } from 'react-router-dom';
import Activity from './Activity';
import Table from 'react-bootstrap/Table'
import ActivityDetails from './ActivityDetails';

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
        const activities = this.props.activities

        return(
            <>
                    <h3>Activities</h3>
                   
                            <Table striped bordered hover size="sm">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Activity Name</th>
                                        <th>Description</th>
                                        <th>Cost</th>
                                        <th>Priority</th>
                                        <th>Comment</th>
                                        <th>Day</th>
                                        <th>Time</th>
                                    </tr>
                                </thead>
                                {activities && activities.map((activity, index) => 
                                    <Activity activity={activity} index={index} />
                                )}
                            </Table>

                
                <button className="btn btn-primary btn-lg"  onClick={this.displayActivityInput}>Add Activity</button>          
                {this.state.displayActivityInput === true  ?  <Redirect to={`/trips/${this.props.trip.id}/activities/new`} />  :  <Redirect to={`/trips/${this.props.trip.id}`} /> }  
          
            </>
        )
    }
}

export default Activities;