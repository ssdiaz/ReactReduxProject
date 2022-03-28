export const updateActivity = (stateFormData, tripID, activityID) => {

    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/trips/${tripID}/activities/${activityID}`, {
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
            } else {
                dispatch({type: 'UPDATE_ACTIVITY', payload: trip})
            }
        })  
    }
}