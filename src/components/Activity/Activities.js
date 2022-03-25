import React from 'react';
import { Link } from 'react-router-dom'
import ActivityInput from './ActivityInput';

const Activities = (props) => {

    const handleDelete = () => {
        
    }
    
    return(
        <div>
           <h3>Activities</h3>
           {props.activities && props.activities.map(activity => 
            <li key={activity.id}>
                <Link to={`activities/${activity.id}`}>{activity.name}</Link>
                <button onClick={handleDelete} >Delete</button>
            </li>
           )}
           {/* <ActivityInput /> */}
        </div>
    )

}

export default Activities;