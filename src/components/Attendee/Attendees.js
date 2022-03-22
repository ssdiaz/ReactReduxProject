import React from 'react';

import { Route, Link } from 'react-router-dom'

import { connect } from 'react-redux';
import { deleteAttendee } from '../../actions/Attendee/deleteAttendee';
import AttendeeInput from './AttendeeInput';
import Attendee from './Attendee';
import { Redirect } from 'react-router-dom'


const Attendees = (props) => {                
 
    // const handleDelete = (attendee) => {
    //     props.deleteAttendee(attendee.id) //not this.props here because it's a functinal component
    //     // props.history.push('/attendees'); //https://stackoverflow.com/questions/44522811/how-to-redirect-to-home-page-after-submitting-redux-form
    //     // this.setState({ state: props });
    // }
    
    // console.log(props.attendees, 'props in attendees') //=> attendees array
    // console.log(props.attendees, 'props') //=> attendees array
    // console.log(props,'props in findAtt')
    

    return(        
        <div>
            {props.attendees && props.attendees.map(attendee => 
                <li key={attendee.id}>
                    <Link to={`/trips/${props.trip.id}/attendees/${attendee.name}`}  attendee={attendee} trip={attendee.trip} >{attendee.name}</Link>
                    {/* <button onClick={() => handleDelete(attendee)}>Delete</button> */}
                    {/* <Attendee handleDelete={props.handleDelete} key={attendee.id} attendee={attendee}  /> */}                    
                </li>
            )} 
            <AttendeeInput trip={props.trip} />
        </div>
    )
}
//http://localhost:3000/api/v1/trips/2/attendees/68



// export default connect(null, {deleteAttendee})(Attendees);
export default connect()(Attendees);













// import React, { Component } from 'react';

// // import Attendee from './Attendee';
// import { Route, Link } from 'react-router-dom'
// //functional comp, bnecasue it presents a list of accounts.... could be class comp as a well
//     // with a class component, if props are being passed, we can just call with this.props
//     // with a functional component, we have to pass the props in as an argument
//         // functional components CANNOT have a render statement --- they're just functions
//         // 
// import { connect } from 'react-redux';
// import { deleteAttendee } from '../../actions/Attendee/deleteAttendee';
// import AttendeeInput from './AttendeeInput';

// import { Redirect } from 'react-router-dom'

// class Attendees extends Component {



//     handleDelete = (attendee) => {
//         this.props.deleteAttendee(attendee.id) //not this.props here because it's a functinal component
//     }
    
//     render(){
//         return(        
//             <div>
//                 {this.props.attendees && this.props.attendees.map(attendee => 
//                     <li key={attendee.id}>
//                         <Link to={`/attendees/${attendee.id}`}>{attendee.name}</Link>
//                         <button onClick={() => this.handleDelete(attendee)}>Delete</button>
//                     </li>
//                 )} 
//                 <AttendeeInput />
//             </div>
//         )
//     }
// }




// export default connect(null, {deleteAttendee})(Attendees);
























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

















// import React from 'react';
// // import Attendee from './Attendee';
// import { Route, Link } from 'react-router-dom'
// //functional comp, bnecasue it presents a list of accounts.... could be class comp as a well
//     // with a class component, if props are being passed, we can just call with this.props
//     // with a functional component, we have to pass the props in as an argument
//         // functional components CANNOT have a render statement --- they're just functions
//         // 
// import { connect } from 'react-redux';
// import { deleteAttendee } from '../../actions/Attendee/deleteAttendee';
// import AttendeeInput from './AttendeeInput';

// import { Redirect } from 'react-router-dom'

// // const Attendees = ({attendees}) => {     //=> returns [{an array of attendee objects}]
// const Attendees = (props) => {                //=> returns {attendees: Array(1)} ... returns an attendees object which contains an array of objects (the above); outer layer of {attendees}
// // class Attendees extends Component {

//     // console.log(props, 'attendeess props -')
//     // console.log(props.attendees, 'attendeess props ----object?')
//     // console.log(props.attendees && props.attendees.map( att => att.name), '-> props array obj passing to Attendee comp')
//     // console.log(props.attendees ? props.attendees.map(attendee => attendee.name) : 'no :/', '-> props array obj passing to Attendee comp')
    
//     const handleDelete = (attendee) => {
//         props.deleteAttendee(attendee.id) //not this.props here because it's a functinal component
//         this.setState(state => ({
//             ...state,
//         }))
//     }
    
    
//     return(        
//         <div>
//             {props.attendees && props.attendees.map(attendee => 
//                 <li key={attendee.id}>
//                     <Link to={`/attendees/${attendee.id}`}>{attendee.name}</Link>
//                     <button onClick={() => handleDelete(attendee)}>Delete</button>
//                 </li>
//             )} 
//             <AttendeeInput />
//         </div>
//     )
// }




// export default connect(null, {deleteAttendee})(Attendees);





