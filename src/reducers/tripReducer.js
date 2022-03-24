// import React from 'react';

export function tripReducer(state = {trips:[]}, action) {
    console.log(state, 'state in tripReducer')
    console.log(action.payload, 'action payload in tripReducer')


    let tripsNew = state.trips.map(trip => { //returning the (a copy of) new array with the correct trip(id) and associated attendees from payload in that
       if (trip.id === action.payload.id) {
           return action.payload
       } else {
           return trip
       }
    })




    switch (action.type) {
        case 'FETCH_TRIPS':
            return {trips: action.payload}

        case 'ADD_TRIP':
            return {...state, trips: [...state.trips, action.payload]}

        case 'ADD_ATTENDEE':  
            return {...state, trips: tripsNew }

        case 'DELETE_TRIP':

            // let trip = state.trips.find( trip => trip.id === action.payload.id)

            let tripsNew = state.trips.filter( trip => trip.id !== action.payload.id)

            return {...state, trips: tripsNew }



        default:
            return state;
    }
}

// export default tripReducer;