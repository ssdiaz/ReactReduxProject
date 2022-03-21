import React from 'react';


const Activities = (props) => {
    //NOTE: first render of props here is undefined


    // console.log(typeof props.activities)
    console.log(props, ' props IN act')
    console.log(props.actvities,' props activities')
    // console.log(props.activities.length, 'length')

    // console.log(props.activities ? props.activities.map( att => att.name) : "hi") 

    // console.log(props.activities && props.activities.map( att => att.name), "this")
// debugger 

    return(
        <div>
           Activities
           {props.activities && props.activities.map(activity => 
            <li key={activity.id}>{activity.name}</li>
           )}
        </div>
    )

}

export default Activities;