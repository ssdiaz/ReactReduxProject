


export const addActivity = (formStateData) => {

    return (dispatch) => { //this is to use dispatch to send to our reducer
        fetch(`http://localhost:3000/api/v1/activities`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            } ,    
            method: 'POST',
            body: JSON.stringify(formStateData)
        })
        .then(response => response.json()) //response here is the return value of the fetch request
        .then(activity => dispatch({type: 'ADD_ACTIVITY', payload: activity}) )
    }
}