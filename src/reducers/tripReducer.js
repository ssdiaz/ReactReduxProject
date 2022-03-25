// import React from 'react';

export function tripReducer(state = {trips:[]}, action) {
    console.log(state, 'state in tripReducer')
    console.log(action.payload, 'action payload in tripReducer')


    
    switch (action.type) {
        case 'FETCH_TRIPS':
            return {trips: action.payload}

        case 'ADD_TRIP':
            return {...state, trips: [...state.trips, action.payload]}
        
        case 'DELETE_TRIP':
            let tripsDeleted = state.trips.filter( trip => trip.id !== action.payload.id)
            return {...state, trips: tripsDeleted }





        case 'ADD_ATTENDEE':      
            let tripsAdded = state.trips.map(trip => {          //returning the (a copy of) new array with the correct trip(id) and associated attendees from payload in that
                if (trip.id === action.payload.id) {
                    return action.payload
                } else {
                    return trip
                }    
            })      
        return {...state, trips: tripsAdded }    
        
        
        case 'UPDATE_ATTENDEE':
            
            let tripsAdded2 = state.trips.map(trip => {          //returning the (a copy of) new array with the correct trip(id) and associated attendees from payload in that
                if (trip.id === action.payload.id) {
                    return action.payload
                } else {
                    return trip
                }    
            })      
        return {...state, trips: tripsAdded2 }    





        default:
            return state;
    }
}

// export default tripReducer;