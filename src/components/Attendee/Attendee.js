//functional components are best when you're just displaying and not doing anything with state
//stateless named function skeleton

import React from 'react';
import { connect } from 'react-redux';
import { deleteAttendee } from '../../actions/Attendee/deleteAttendee';
import AttendeeInput from './AttendeeInput';
import AttendeeDetail from './AttendeeDetails';


class Attendee extends React.Component {

    state = {  
        displayAttendeeInput: false
    }
    
    displayAttendeeInput = () => {
        this.setState({
            displayAttendeeInput: !this.state.displayAttendeeInput
        })
    }
    
    findAttendee = () => {
       return this.props.attendees.find(attendee => attendee.name == this.props.match.params.name) //I switched this to name instead of id
    };
      
    handleDelete = () => {

        let attendee = this.findAttendee()

        this.props.deleteAttendee(attendee.id, this.props.trip.id) //not this.props here because it's a functinal component
        //props.history.push('/attendees'); //https://stackoverflow.com/questions/44522811/how-to-redirect-to-home-page-after-submitting-redux-form

        this.props.history.push(`/trips/${this.props.trip.id}`)
    }


    attendeeDetails = (attendee) => {
        // let attendee = this.findAttendee()

        return(
            <div>
                <AttendeeDetail attendee={attendee} />

                <button onClick={ this.displayAttendeeInput }>Edit</button>                    
                <button onClick={ () => this.handleDelete() }>Delete</button>
                {/* <button onClick={ () => this.handleDelete(attendee) }>Delete</button> */}
            </div>
        )
    }

    render() { 
        let attendee = this.findAttendee()

        return (
            <div>
                <h4>{attendee ? this.attendeeDetails(attendee) : null }</h4>   {/* when you change the URL, you are rendering - losing your props so losing the params :id/your redux store clears, which is why the first time you visit via the URL bar is undefined. When you go through the link you have the params.  */}
            
                {this.state.displayAttendeeInput == true ? <AttendeeInput attendee={attendee}/> :  null }
            
            </div> 
        );
    }
}


export default connect(null, {deleteAttendee})(Attendee);






















// // const mapStateToProps = state => { 
// //     console.log(state.attendeeReducer.attendees, 'state')

// //     return {
// //         attendees: state.attendeeReducer.attendees
// //     }
// // }


// // export default Attendee;
// export default connect(null, {deleteAttendee})(Attendee);
// // export default connect(mapStateToProps, {deleteAttendee})(Attendee);







// //functional components are best when you're just displaying and not doing anything with state
// //stateless named function skeleton

// import React from 'react';
// // import { Redirect } from 'react-router-dom'
// import { connect } from 'react-redux';
// import { deleteAttendee } from '../../actions/Attendee/deleteAttendee';

// // function Attendee(props) {
// const Attendee = (props) => {
//     // console.log(props, 'props in ATTENDEE')
//     // console.log(props.attendees, 'props in ATTENDEE, props.attendees')
//     // console.log(props.match.params.name, 'match')


//     const findAttendee = (props) => {
//         // console.log(props.attendees.find(attendee => attendee.id == props.match.params.id), 'um this???')
//         return(
//             props.attendees && props.attendees.find(attendee => attendee.name == props.match.params.name) //I switched this to name instead of id
//         )
//     };
  
//     let attendee = findAttendee(props)
   

//     const handleDelete = (attendee) => {
//         props.deleteAttendee(attendee.id) //not this.props here because it's a functinal component
//         props.history.push('/attendees'); //https://stackoverflow.com/questions/44522811/how-to-redirect-to-home-page-after-submitting-redux-form
//         // this.setState({});
//     }
    
//     const attendeeDetails = () => {
//         return(
//             <div>
//                 <h4>Name: {attendee.name}</h4>
//                 <li>Phone: {attendee.phone}</li>
//                 <li>Status: {attendee.status}</li> 
//                 <li>Notes: {attendee.notes} </li>
//                 <li>Relationship: {attendee.relationship}</li> 
//                 <li>Lodging Budget: {attendee.lodgingBudget} </li>
//                 <li>Events Budget: {attendee.eventsBudget}</li> 
//                 <button onClick={() => handleDelete(attendee)}>Delete</button>
//             </div>
//         )
//     }

//     return (
//         <div>
//             <h4>{attendee ? attendeeDetails() : null}</h4>  {/*// this accounts for if account doesnt exitst/undefined - just shows null */}
//             {/* when you chnage the URL, you are rendering - losing your props so losing the params :id/your redux store clears, which is why the first time you visit via the URL bar is undefined. When you go through the link you have the params.  */}
//         </div> 
//     );
// }


// export default connect(null, {deleteAttendee})(Attendee);


