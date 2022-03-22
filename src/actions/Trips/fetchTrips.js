// import React from 'react';

export function fetchTrips(props) {
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/trips', {
            method: 'GET'
        })
        .then(response => response.json())
        .then(trips => { 
            // console.log(trips, 'trips')
            dispatch({         
                type: 'FETCH_TRIPS', 
                payload: trips 
            })
        }) 
    }
}
