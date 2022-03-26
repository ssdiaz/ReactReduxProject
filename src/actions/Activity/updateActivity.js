
export const updateActivity = (stateFormData, props) => {

    let tripID = props.activity.trip_id
    let activityID = props.activity.id


    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/trips/${tripID}/activities/${activityID}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            } ,    
            method: 'PATCH',
            body: JSON.stringify(stateFormData)
        })
        .then(response => response.json()) //response here is the return value of the fetch request
        // .then(attendee => {                
        //     if (attendee.error){
        //         alert(attendee.error)
        //     } else {
        //         // alert('Attendee Added')
        //         dispatch({type: 'ADD_ATTENDEE', payload: attendee}) 
        //     }
        // })  
        // .then(trip => {                
        //     if (trip.error){
        //         alert(trip.error)
        //     } else {
        //         // alert('Attendee Added')
        //         dispatch({type: 'ADD_ATTENDEE', payload: trip}) 
        //     }
        // })  
        .then(trip => dispatch({type: 'UPDATE_ACTIVITY', payload: trip}) )
    }


}