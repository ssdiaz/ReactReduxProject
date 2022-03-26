
const ActivityDetails = (props) => {
    let activity = props.activity

    return(
        <div>
            <h4>Name: {activity.name}</h4>
            <ul>
                <li>Description: {activity.description}</li>
                <li>Cost: {activity.cost}</li>
                <li>Mandatory: {activity.mandatory}</li>
                <li>Priority: {activity.priority}</li>
                <li>Include In Total? : {activity.includeInTotal}</li>
                <li>Comment: {activity.comment}</li>
                <li>Day: {activity.day}</li>
                <li>Time: {activity.time}</li>
            </ul>
        </div>
    )
}

export default ActivityDetails