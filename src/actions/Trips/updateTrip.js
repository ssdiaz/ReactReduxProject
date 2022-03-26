
export const updateTrip = (stateFormData, props) => {  

    console.log(props, 'props hERE')

    let tripID = props.trip.id
    // let attendeeID = props.attendee.id


    // console.log(stateFormData, 'state in addAtt')
    
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/trips/${tripID}`, {
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
        .then(trip => dispatch({type: 'UPDATE_TRIP', payload: trip}) )
    }
}