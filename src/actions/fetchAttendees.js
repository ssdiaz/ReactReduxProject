

export function fetchAttendees() {
    // return action

    return (dispatch) => {
        console.log('inside fetchAttendees') 

        // fetch requests return a promise that we will get some reponse back eventually
        fetch('http://localhost:3000/api/v1/attendees', {
            method: 'GET'
        })
        .then(response => response.json()) //response here is the return value of the fetch request, once fetch is resolved. Here, we turn it into JSON to read
        .then(attendees => { // attendes argument here is the same as response.json() above.
            console.log(attendees[0].name, '-> name of attendees[0] --- from fetch and then JSONed') 
            console.log(attendees, '-> attendees')

            dispatch({          //dispatching here is saying access our reducer and this action object and update our redux store nbased on this info beloe:
                type: 'FETCH_ATTENDEES', 
                payload: attendees //NOTE: this 'attendees' word must match the .then arguement word
            })
        }) 
    }
}

