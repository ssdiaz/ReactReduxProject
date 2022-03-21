

export function fetchActivities() {

    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/activities', {
            method: 'GET'
        })
        .then(response => response.json()) //response here is the return value of the fetch request
        .then(activities => {
            // console.log(activities[0].name, '--> inside fetchActivities')
            // console.log(activities, '--> inside fetchActivities')
            
            dispatch({
                type: 'FETCH_ACTIVITIES',
                payload: activities
            })
        })  //data here is the return value above (which is the fetch return in json form)
    }
}