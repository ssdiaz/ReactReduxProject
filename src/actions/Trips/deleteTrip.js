export const deleteTrip = (tripID) => {
    return dispatch => {
        return fetch(`http://localhost:3000/api/v1/trips/${tripID}`, {
            method: 'DELETE' //body contains data if adding stuff; here you're just deleting so dont need. youll need it for an update as well.
        })
        .then(response => response.json())
        .then(trip => {
            alert('Trip Deleted')
            return dispatch({type: 'DELETE_TRIP', payload: trip})
        })
    }
}