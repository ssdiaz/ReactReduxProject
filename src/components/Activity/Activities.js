import React from 'react';
import { Redirect } from 'react-router-dom';
import Activity from './Activity';
import Table from 'react-bootstrap/Table'
import NumberFormat from "react-number-format";


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
        let totalCost = activities.filter( activity => activity.includeInTotal === true)
            .reduce( (total, activity) => {
                if (activity.includeInTotal === true) {
                    return total = total + activity.cost
                }
            } , 0 )
        // let totalCost = activities.reduce( (total, activity) => {
        //     if (activity.includeInTotal === true) {
        //         return total = total + activity.cost
        //     }
        // } , 0 )

        let sortedActivities = [...activities];
        sortedActivities.sort((a, b) => {
            if (a.day < b.day) {
            return -1;
            }
            if (a.day > b.day) {
            return 1;
            }
            return 0;
        });

        return(
            <>
                <h3>Activities</h3>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Activity Name</th>
                            <th>Description</th>
                            <th>Priority</th>
                            {/* <th>Mandatory?</th> */}
                            <th>Cost</th>
                            <th>Include in Total?</th>
                            <th>Comment</th>
                            <th>Day</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    {sortedActivities.map((activity, index) => 
                        <Activity activity={activity} index={index} />
                    )}
                    <tfoot>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            {/* <td></td> */}
                            <td><b>TOTAL COST PER GIRL:</b></td>
                            <td><b>
                                <NumberFormat
                                    thousandsGroupStyle="thousand"
                                    value={Math.round(totalCost)}
                                    prefix="$"
                                    displayType="text"
                                    thousandSeparator={true}
                                /> 
                            </b></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tfoot>
                </Table>
            
                <button className="btn btn-primary btn-lg"  onClick={this.displayActivityInput}>Add Activity</button>          
                {this.state.displayActivityInput === true  ?  <Redirect to={`/trips/${this.props.trip.id}/activities/new`} />  :  <Redirect to={`/trips/${this.props.trip.id}`} /> }  
            </>
        )
    }
}

export default Activities;