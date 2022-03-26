export const updateAttendee = (stateFormData, props) => { 

    let tripID = props.attendee.trip_id
    let attendeeID = props.attendee.id
    
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/trips/${tripID}/attendees/${attendeeID}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            } ,    
            method: 'PATCH',
            body: JSON.stringify(stateFormData)
        })
        .then(response => response.json())
        .then(trip => {                
            if (trip.error){
                alert(trip.error)
            } else{
             dispatch({type: 'UPDATE_ATTENDEE', payload: trip})
            }
        })  
    }
}