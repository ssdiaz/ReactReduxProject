

export const addAttendee = (stateFormData, tripID) => { //data comes from the state of the form

   

    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/trips/${tripID}/attendees`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            } ,    
            method: 'POST',
            body: JSON.stringify(stateFormData)
        })
        .then(response => response.json()) //response here is the return value of the fetch request
        .then(attendee => {                
            if (attendee.error){
                alert(attendee.error)
            } else {
                // alert('Attendee Added')
                dispatch({type: 'ADD_ATTENDEE', payload: attendee}) 
                // return dispatch({type: 'ADD_ATTENDEE', payload: attendee}) 
            }
        })  
    }
}






// .then(attendee => dispatch({type: 'ADD_ATTENDEE', payload: attendee}) )  //attenddee here needs to match our backend controllers??
// // need to add these then statements so we can render immediately our new attendee without having to refresh the page
// }