export function tripReducer(state = { trips:[] }, action) {

    let tripToUpdate;

    switch (action.type) {
        case 'FETCH_TRIPS':
            return {trips: action.payload} 

        case 'ADD_TRIP': 
            return {...state, trips: [...state.trips, action.payload]}

        case 'DELETE_TRIP':
            let tripsDeleted = state.trips.filter( trip => trip.id !== action.payload.id)
            return {...state, trips: tripsDeleted }

        case 'ADD_ATTENDEE':
        case 'ADD_ACTIVITY':  
        case 'UPDATE_ATTENDEE':  
        case 'UPDATE_ACTIVITY':
        case 'UPDATE_TRIP':
            let tripsUpdated = state.trips.map(trip => {  
                if (trip.id === action.payload.id) {
                    return action.payload
                } else {
                    return trip
                }    
            })      
            return {...state, trips: tripsUpdated }

        case 'DELETE_ATTENDEE':
            tripToUpdate = state.trips.find(trip => trip.id === action.payload.trip_id)
            
            let newAttendees = tripToUpdate.attendees.filter( attendee => attendee.id !== action.payload.id ) 

            let newTripList = state.trips.map(trip => {    
                if (trip.id === action.payload.trip_id) {
                    trip.attendees = newAttendees
                    return trip
                } else {
                    return trip
                }    
            })                       
            return {...state, trips: newTripList}

        case 'DELETE_ACTIVITY':           
            tripToUpdate = state.trips.find(trip => trip.id == action.payload.trip_id) 

            let newActivities = tripToUpdate.activities.filter( activity => activity.id !== action.payload.id )       
            
            let UpdatedTripList = state.trips.map(trip => {    
                if (trip.id === action.payload.trip_id) {
                    trip.activities = newActivities
                    return trip
                } else {
                    return trip
                }    
            })                       
            return {...state, trips: UpdatedTripList}


        default:
            return state;
    }
}