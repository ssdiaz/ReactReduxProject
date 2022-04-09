import React from 'react';
import NumberFormat from "react-number-format";
import { connect } from 'react-redux';
import { updateActivity } from '../../actions/Activity/updateActivity';


class ActivityDetails extends React.Component {

    constructor(props) {
        super(props);
        let activity = this.props.activity
      
        this.state = {   
            name: activity.name,
            description: activity.description,
            cost:activity.cost,
            mandatory: activity.mandatory,
            priority: activity.priority,
            includeInTotal: activity.includeInTotal,
            comment: activity.comment,
            day: activity.day,
            time: activity.time,
            trip_id: activity.trip_id,
            input_type: 'edit',
        }
    }

    handleClick = () => {
        this.setState({ 
            includeInTotal: !this.state.includeInTotal 
        }, () => {
            let activity = this.props.activity
            this.props.updateActivity(this.state, activity.trip_id, activity.id)
          }); 
    }
    
    checkBox = () => {
        return this.props.activity.includeInTotal === true ? true : false
    }
    
    render() {
        let activity = this.props.activity
        let index = this.props.index

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
                {/* <td>amount if split is ticked. so {activity.cost} / confirmed girls - need this number from somewhere. Redux state? Probs</td> */}
                <td> 
                    <input type="checkbox" className="form-check-input"  defaultChecked={this.checkBox()} value={this.state.includeInTotal} name="includeInTotal" onChange={() => this.handleClick()} />
                </td>
                <td>{activity.comment}</td>
                <td>{activity.day}</td>
                <td>{activity.time}</td>
            </>
        );
    }
}


export default connect(null, {updateActivity})(ActivityDetails);























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