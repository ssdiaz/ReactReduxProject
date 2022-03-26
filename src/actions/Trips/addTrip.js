export const addTrip = (formStateData) => { 
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/trips', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            } ,    
            method: 'POST',
            body: JSON.stringify(formStateData)
        })
        .then(response => response.json())
        .then(trip => {                
            if (trip.error){
                alert(trip.error)
            } else {
                dispatch({type: 'ADD_TRIP', payload: trip})
            }
        })  
    }
}