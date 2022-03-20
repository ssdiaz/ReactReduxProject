//functional components are best when you're just displaying and not doing anything with state
//stateless named function skeleton


import React from 'react';



// function Attendee(props) {
const Attendee = (props) => {

    let attendee = props.attendees[props.match.params.id -1]
    console.log(attendee)


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
            <h4>{attendee ? attendeeDetails() : null}</h4>
        </div>
    );
}

export default Attendee;

