
export const updateAttendees = (attendees) => {  

    // console.log(attendees, 'attendess in updateAttendees arg')

    return (dispatch) => {
        return dispatch({type: 'UPDATE_ATTENDEES', payload: attendees})
    }
}
