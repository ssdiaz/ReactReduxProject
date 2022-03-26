export const deleteAttendee = (attenddeeID, tripID) => {
    return (dispatch) => {
        return fetch(`http://localhost:3000/api/v1/trips/${tripID}/attendees/${attenddeeID}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(attendee => {
            alert('Attendee Deleted')
            return dispatch({type: 'DELETE_ATTENDEE', payload: attendee})
        }) 
    }
}