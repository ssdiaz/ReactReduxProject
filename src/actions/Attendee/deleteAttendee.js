

export const deleteAttendee = (attenddeeID) => {
    return dispatch => {
        return fetch(`http://localhost:3000/api/v1/attendees/${attenddeeID}`, {
            method: 'DELETE' //body contains data if adding stuff; here you're just deleting so dont need. youll need it for an update as well.
        })
        .then(response => response.json())
        .then(attendee => 
            // console.log(attendee, 'delete')
            {return dispatch({type: 'DELETE_ATTENDEE', payload: attendee})}
        ) 
    }
}