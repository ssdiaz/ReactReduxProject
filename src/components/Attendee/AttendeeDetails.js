const AttendeeDetail = (props) => {
    
    let attendee = props.attendee

    return(
        <div>
            <h4>Name: {attendee.name}</h4>
            <ul>
                <li>Phone: {attendee.phone}</li>
                <li>Status: {attendee.status}</li> 
                <li>Relationship: {attendee.relationship}</li> 
                <li>Notes: {attendee.notes} </li>
                <li>Lodging Budget: {attendee.lodgingBudget} </li>
                <li>Events Budget: {attendee.eventsBudget}</li> 
            </ul>
        </div>
    )
}

export default AttendeeDetail;