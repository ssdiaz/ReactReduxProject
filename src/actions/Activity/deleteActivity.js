export const deleteActivity = (activityID, tripID) => {
    return (dispatch) => {
        return fetch(`http://localhost:3000/api/v1/trips/${tripID}/activities/${activityID}`, {
            method: 'DELETE',
        })
        .then(response => response.json())
        .then(activity => {
            alert('Activity Deleted')
            return dispatch({type: 'DELETE_ACTIVITY', payload: activity})
        }) 
    }
}
