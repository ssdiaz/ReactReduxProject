


export const addActivity = (formStateData, tripID) => {

    console.log('hittiner here')

    return (dispatch) => { //this is to use dispatch to send to our reducer
        fetch(`http://localhost:3000/api/v1/trips/${tripID}/activities`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            } ,    
            method: 'POST',
            body: JSON.stringify(formStateData)
        })
        .then(response => response.json()) //response here is the return value of the fetch request
        
        .then(activity => {                
            if (activity.error){
                alert(activity.error)
            } else {
                // alert('Attendee Added')
                dispatch({type: 'ADD_ACTIVITY', payload: activity})
            }
        })  

        
        // .then(activity => dispatch({type: 'ADD_ACTIVITY', payload: activity}) )
    }
}