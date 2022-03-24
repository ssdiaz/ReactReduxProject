
// a reducer is really just a function (25 mins Part 4)
// default state is really only used the first time, previosutState is used after

export function attendeeReducer(state = {trips:[], attendees: []}, action) {
// export default function attendeeReducer(state = {attendees: []}, action) {
    // console.log(state, "-> state in attendeeReducer")
    // console.log(action, "-> action in attendeeReducer")
    // console.log(action.payload, "-> action.payload in attendeeReducer")
    // console.log(state.attendeees, "-> state.attendeees")
    // console.log(state, "-> state")

    // console.log(action, 'action in attRed');
    // console.log(action.attendees, 'action.attendees in attRed');
    // console.log(action.payload, 'action.payload in attRed');
    // console.log(state, 'state in attendeeReducer (pre)')

    let indx;

        // console.log(state, 'state IN attendeeREDUCER') 

    switch (action.type) {
        // case 'UPDATE_ATTENDEES':


        //     //  let tripsNew = state.trips.map(trip => {
        //     //     if (trip.id === action.payload.id) {
        //     //         return action.payload
        //     //     } else {
        //     //         return trip
        //     //     }
        //     // })

        //     let trip = state.trips.filter( trip =>
        //         trip.id == action.payload.id
        //     )
        //     console.log(trip, 'trip!')

        //     let attendeesList = trip.attendees
        //     console.log(attendeesList, 'attendees')

        //     // return [
        //     //     ...state, {                     
        //     //         trips: tripsNew,
        //     //         attendees: attendeesList
        //     //     } 
        //     // ]
        //     return state




            // return {
            //     ...state,
            //     attendees: action.payload
            //     // trips: [...state.trips, action.payload]
            // }

        // case 'FETCH_ATTENDEES':
        //     // return [state.attendees: action.payload]
        //     // return action.payload 
        //     return {attendees: action.payload} //OG

        // case 'ADD_ATTENDEE':
        //     console.log(state, 'state in addAtt') //=. returns ATTENDEE
        //     console.log(action.payload, 'payload retruns:') //=> reutrns TRIP
  
        //      let tripsNew = state.trips.map(trip => {
        //         if (trip.id === action.payload.id) {
        //             return action.payload
        //         } else {
        //             return trip
        //         }
        //     })

        //     let trip = state.trips.filter( trip =>
        //         trip.id == action.payload.id
        //     )

        //     let attendeesList = trip.attendees
        //     console.log(attendeesList, 'attendees')

        //     return [
        //         ...state, {                     
        //             trips: tripsNew,
        //             attendees: attendeesList
        //         } 
        //     ]
            // return {...state, trips: tripsNew , attendees: }



                // return {...state, attendees: action.payload}
            // }
  
        case 'DELETE_ATTENDEE':
            console.log(state.attendees, 'delete pre state.attendees')
            console.log(action.payload, 'action.payload')

            indx = state.attendees.findIndex( attendee => attendee.id === action.payload.id)

            console.log(indx) //=>3

            return [...state.attendees.slice(0,indx), ...state.attendees.slice(indx +1)]
            // let attendeesList = state.attendees.map(attendee => {
            //     if (attendee.id === action.payload.id) {
            //         return action.payload
            //     } else {
            //         return attendee
            //     }
            // })
            // // let attendeesList = state.attendees.filter(attendee => attendee.id !== action.payload.id)
            // console.log(attendeesList, 'attendeesList')

            // return { 
            //     // attendees: state.attendees.filter(attendee => attendee.id !== action.payload)
            //     // attendees: state.attendees.filter(attendee => attendee.id !== action.payload.id)
            //     ...state, attendees: attendeesList
            // }
        default:
            return state;
    }
}
