const AttendeeDetail = (props) => {
    
    let attendee = props.attendee

    return(
        <div className="card" style={{widtch: "18rem",}}>
            <div className="card-body">
                <h4 className="card-title">Name: {attendee.name}</h4>
                <ul className="card-text">
                    <li>Phone: {attendee.phone}</li>
                    <li>Status: {attendee.status}</li> 
                    <li>Relationship: {attendee.relationship}</li> 
                    <li>Notes: {attendee.notes} </li>
                    <li>Lodging Budget: {attendee.lodgingBudget} </li>
                    <li>Events Budget: {attendee.eventsBudget}</li> 
                </ul>
            </div>
       </div>
    )
}

export default AttendeeDetail;