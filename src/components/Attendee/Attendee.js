//functional components are best when you're just displaying and not doing anything with state
//stateless named function skeleton

import React from 'react';
import { Redirect } from 'react-router-dom'

// function Attendee(props) {
const Attendee = (props) => {

    const findAttendee = (props) => {
        // console.log(props.attendees.find(attendee => attendee.id == props.match.params.id), 'um this???')
        return(
            props.attendees && props.attendees.find(attendee => attendee.id == props.match.params.id)
        )
    };
    // function findAttendee() {
        //     // console.log(props.attendees.find(attendee => attendee.id == props.match.params.id), 'um this???')
        //     return(
        //         props.attendees.find(attendee => attendee.id == props.match.params.id)
        //     )
        // };
        // console.log(props.match.params.id, 'check this')
        // console.log(props.attendees[0].id, 'check this 2')
            
    //let attendee = props.attendees[props.match.params.id -1] // this is undefined the first time around bc in Attendees, we are plain rendering the comp, and here we are using the URL route
    let attendee = findAttendee(props)
   

    const attendeeDetails = () => {
        return(
            <div>
                <h4>Name: {attendee.name}</h4>
                <li>Phone: {attendee.phone}</li>
                <li>Status: {attendee.status}</li> 
                <li>Notes: {attendee.notes} </li>
                <li>Relationship: {attendee.relationship}</li> 
                <li>Lodging Budget: {attendee.lodgingBudget} </li>
                <li>Events Budget: {attendee.eventsBudget}</li> 
            </div>
        )
    }

    return (
        <div>
            <h4>{attendee ? attendeeDetails() : null}</h4>  {/*// this accounts for if account doesnt exitst/undefined - just shows null */}
            {/* when you chnage the URL, you are rendering - losing your props so losing the params :id/your redux store clears, which is why the first time you visit via the URL bar is undefined. When you go through the link you have the params.  */}
        </div> 
    );
}

export default Attendee;

