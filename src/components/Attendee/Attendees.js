import React from 'react';
import Attendee from './Attendee';
import { Route, Link } from 'react-router-dom'
//functional comp, bnecasue it presents a list of accounts.... could be class comp as a well
    // with a class component, if props are being passed, we can just call with this.props
    // with a functional component, we have to pass the props in as an argument
        // functional components CANNOT have a render statement --- they're just functions
        // 



// const Attendees = ({attendees}) => {     //=> returns [{an array of attendee objects}]
const Attendees = (props) => {                //=> returns {attendees: Array(1)} ... returns an attendees object which contains an array of objects (the above); outer layer of {attendees}
// class Attendees extends Component {

    // console.log(props.attendees.map( att => att.name), '-> props array obj passing to Attendee comp')

    return(        
        <div>
            {props.attendees.map(attendee => 
                <li key={attendee.id}>
                    <Link to={`/attendees/${attendee.id}`}>{attendee.name}</Link>
                </li>




            )} 
        </div>
    )
}

export default Attendees;



// note: key can also be <li key={attendee.id}



// return(        
//     <div>
//         <h3>Attendees</h3>
//         {props.attendees.map(attendee => 

//             <div key={attendee.id}>hiiii</div>

//             // <div key={attendee.id}><Attendee attendee={this.attendee}/></div>
//             // <li key={attendee.id}>Name: {attendee.name} | Phone: {attendee.phone} | Status: {attendee.status}  | Notes: {attendee.notes}  | Relationship: {attendee.relationship}  | Loding Budget: {attendee.lodgingBudget}  | Events Budget: {attendee.eventsBudget} </li>
        
//         )} 
//     </div>
// )