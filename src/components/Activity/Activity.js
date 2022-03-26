import React from 'react';
import ActivityDetails from './ActivityDetails';

const Activity = (props) => {
    let activity = props.activity

    return(
        <div>
            <ActivityDetails activity={activity} />
        </div>
    )
}

export default Activity