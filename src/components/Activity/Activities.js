import React from 'react';
import { Link } from 'react-router-dom'
import ActivityInput from './ActivityInput';
import { deleteActivity } from '../../actions/Activity/deleteActivity';
import { connect } from 'react-redux';
import Activity from './Activity';

const Activities = (props) => {



    const handleDelete = (activityDeleted) => {
        
        let activity = props.activities.find(activity => activity.id === activityDeleted.id) 

        props.deleteActivity(activity.id, activity.trip_id) 

        // props.history.push(`/trips/${activity.trip_id}`)
    }



    
    return(
        <div>
           <h3>Activities</h3>

           {props.activities && props.activities.map(activity => 
            <li key={activity.id}>
                {/* <Link to={`/trips/${activity.trip_id}/activities/${activity.id}`}  activity={activity}  >{activity.name}</Link> */}

                <Activity activity={activity} />    

                <button onClick={() => handleDelete(activity)} >Delete</button> 
                
                
                {/* <button onClick={() => handleDelete(activity)} >Delete</button>  */}


            </li>
           )}

           <ActivityInput trip={props.trip} />
        </div>
    )

}

export default connect(null, {deleteActivity})(Activities);