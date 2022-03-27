const ActivityDetails = (props) => {
    
    let activity = props.activity

    return(
        <div className="card" style={{widtch: "18rem",}}>
            <div className="card-body">
                <h4 className="card-title">{activity.name}</h4>
                <h6 className="card-title">Description: {activity.description}</h6>
                <ul>
                    <li>Cost: {activity.cost}</li>
                    <li>Mandatory: {activity.mandatory}</li>
                    <li>Priority: {activity.priority}</li>
                    <li>Include In Total? : {activity.includeInTotal}</li>
                    <li>Comment: {activity.comment}</li>
                    <li>Day: {activity.day}</li>
                    <li>Time: {activity.time}</li>
                </ul>
            </div>
        </div>
    )
}

export default ActivityDetails