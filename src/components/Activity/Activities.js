import React from 'react';
import { Route, Link } from 'react-router-dom'
import ActivityInput from './ActivityInput';

const Activities = (props) => {
    //NOTE: first render of props here is undefined


    // console.log(typeof props.activities)
    // console.log(props, ' props IN act')
    // console.log(props.actvities,' props activities')
    // console.log(props.activities.length, 'length')

    // console.log(props.activities ? props.activities.map( att => att.name) : "hi") 

    // console.log(props.activities && props.activities.map( att => att.name), "this")
// debugger 

    const handleDelete = () => {
        
    }
    
    return(
        <div>
           Activities
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