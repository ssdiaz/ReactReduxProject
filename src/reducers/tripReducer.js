// import React from 'react';

export function tripReducer(state = {trips:[]}, action) {
    // console.log(state, 'trip state in reducer')

    switch (action.type) {
        case 'FETCH_TRIPS':
            return {trips: action.payload}

        case 'ADD_TRIP':
            // return [...state, action.attendees];
            return {...state, trips: [...state.trips, action.payload]}

        case 'ADD_ATTENDEE':
            console.log(state, 'state in addAtt')
            // console.log(action.payload, 'action payload')
            // console.log(...state.attendees, action.payload, '...')

                // let attendees = state.attendees.map(attendee => {
                //     if (attendee.id === action.payload.id) {
                //       return action.payload
                //     } else {
                //       return attendee
                //     }
                //   })
                //   return {attendees: attendees}
                //   return {...state, attendees: attendees}
                // return {...state, attendees: [...state.attendees, action.payload]}

   
             let tripsNew = state.trips.map(trip => {
                if (trip.id === action.payload.id) {
                    return action.payload
                } else {
                    return trip
                }
                })
            return {...state, trips: tripsNew }










        default:
            return state;
    }
}

// export default tripReducer;