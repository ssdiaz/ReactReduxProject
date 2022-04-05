import NumberFormat from "react-number-format";


const ActivityDetails = (props) => {
    
    let activity = props.activity
    let index = props.index

    return(
        <>
            <td>{index + 1}</td>
            <td>{activity.name}</td>
            <td>{activity.description}</td>
            <td>{activity.priority}</td>
            {/* <td>{activity.mandatory}</td> */}
            <td>
                <NumberFormat
                    thousandsGroupStyle="thousand"
                    value={activity.cost}
                    prefix="$"
                    displayType="text"
                    thousandSeparator={true}
                /> 
            </td>
            <td>{activity.comment}</td>
            <td>{activity.day}</td>
            <td>{activity.time}</td>
        </>
    )
}

export default ActivityDetails

























// const ActivityDetails = (props) => {
    
//     let activity = props.activity

//     return(
//         <>

//                 <h4 className="card-title">{activity.name}</h4>
//                 <h6 className="card-title">Description: {activity.description}</h6>
//                 <ul className="card-text">
//                     <li>Cost: {activity.cost}</li>
//                     <li>Priority: {activity.priority}</li>
//                     {/* <li>Mandatory: {activity.mandatory}</li>
//                     <li>Include In Total? : {activity.includeInTotal}</li> */}
//                     <li>Comment: {activity.comment}</li>
//                     <li>Day: {activity.day}</li>
//                     <li>Time: {activity.time}</li>
//                 </ul>


//         </>
//     )
// }

// export default ActivityDetails