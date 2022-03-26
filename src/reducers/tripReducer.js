// import React from 'react';

export function tripReducer(state = {trips:[]}, action) {
    console.log(state, 'state in tripReducer')
    // console.log(action.payload, 'action payload in tripReducer')

    let indx;
    
    switch (action.type) {
        case 'FETCH_TRIPS':
            return {trips: action.payload} //maybe here we set atendees and then that goes ot ther reduver..? idkl then ists liek ALL attendees instead of just attendees from partucualt trup

        case 'ADD_TRIP':
 
            return {...state, trips: [...state.trips, action.payload]}
        
        // case 'UPDATE_TRIP':
        //     console.log(state, 'stat rherere')

        //     let tripsUpdated = state.trips.map(trip => {          //returning the (a copy of) new array with the correct trip(id) and associated attendees from payload in that
        //         if (trip.id === action.payload.id) {
        //             return action.payload
        //         } else {
        //             return trip
        //         }    
        //     })      
        //     return {...state, trips: tripsUpdated }  


        case 'DELETE_TRIP':
            let tripsDeleted = state.trips.filter( trip => trip.id !== action.payload.id)
            return {...state, trips: tripsDeleted }


        case 'ADD_ATTENDEE': 
        case 'UPDATE_ATTENDEE':  
        case 'UPDATE_TRIP':
            let tripsUpdated = state.trips.map(trip => {          //returning the (a copy of) new array with the correct trip(id) and associated attendees from payload in that
                if (trip.id === action.payload.id) {
                    return action.payload
                } else {
                    return trip
                }    
            })      
            return {...state, trips: tripsUpdated }    
            // break;
        

        case 'DELETE_ATTENDEE':
            let tripToChange = state.trips.find(trip => trip.id == action.payload.trip_id) //=> returns trip 13 so you can get attendees
            let newAttendees = tripToChange.attendees.filter( trip => trip.id !== action.payload.id ) //=> returns attendees list w/o deleted attendee
            
            let newTripList = state.trips.map(trip => {    
                if (trip.id === action.payload.trip_id) {
                    trip.attendees = newAttendees
                    return trip
                } else {
                    return trip
                }    
            })                       
            return {...state, trips: newTripList}

        default:
            return state;
    }
}

// export default tripReducer;










        // case 'UPDATE_ATTENDEE':
            
        //     let tripsAdded2 = state.trips.map(trip => {          //returning the (a copy of) new array with the correct trip(id) and associated attendees from payload in that
        //         if (trip.id === action.payload.id) {
        //             return action.payload
        //         } else {
        //             return trip
        //         }    
        //     })      
        // return {...state, trips: tripsAdded2 }    
