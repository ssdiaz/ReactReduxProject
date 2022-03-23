// import React from 'react';

export function tripReducer(state = {trips:[]}, action) {
    console.log(state, 'trip state in reducer')

    switch (action.type) {
        case 'FETCH_TRIPS':
            return {trips: action.payload}

        case 'ADD_TRIP':
            // return [...state, action.attendees];
            return {...state, trips: [...state.trips, action.payload]}


        // case 'ADD_ATTENDEE':

        //     let trips = state.trips.map(trip => {
        //         if (trip.id === action.payload.id) {
        //           return action.payload
        //         } else {
        //           return trip
        //         }
        //       })
        //       return {...state, trips: trips}



            // let attendees = state.attendees.map(attendee => {
            //     if (attendee.id === action.payload.id) {
            //         return action.payload
            //     } else {
            //         return attendee
            //     }
            //     })
            //     return {...state, attendees: attendees}




        default:
            return state;
    }
}

// export default tripReducer;