

export const deleteActivity = (activityID) => {
    return (dispatch) => {
        return fetch(`http://localhost:3000/api/v1/activities/${activityID}`), {
            method: 'DELETE',
        }

        .then(response => response.json())
        .then(activity => dispatch({type: 'DELETE_ACTIVITY', payload: activity}) )
    }
}