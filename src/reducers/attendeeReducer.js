
// a reducer is really just a function (25 mins Part 4)
// default state is really only used the first time, previosutState is used after

export function attendeeReducer(state = {attendees: []}, action) {
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

    switch (action.type) {
        case 'UPDATE_ATTENDEES':
            // console.log(state, 'state IN UPDAT_ATT') 
            return {
                ...state,
                attendees: action.payload
                // trips: [...state.trips, action.payload]
            }

        // case 'FETCH_ATTENDEES':
        //     // return [state.attendees: action.payload]
        //     // return action.payload 
        //     return {attendees: action.payload} //OG

        // case 'ADD_ATTENDEE':
        //     console.log(state, 'state in addAtt')
        //     // console.log(action.payload, 'action payload')
        //     console.log(...state.attendees, action.payload, '...')

        //         // let attendees = state.attendees.map(attendee => {
        //         //     if (attendee.id === action.payload.id) {
        //         //       return action.payload
        //         //     } else {
        //         //       return attendee
        //         //     }
        //         //   })
        //         //   return {attendees: attendees}
        //         //   return {...state, attendees: attendees}
        //         return {...state, attendees: [...state.attendees, action.payload]}


                // let trips = state.trips.map( trip => {
                //     if (trip.id == action.payload.id) {
                //         return action.payload
                //     } else {
                //         return trip
                //     }
                // })
                // return {...state, trips: trips}
                // return {...state, trips: [...state.trips, action.payload]}





                // case 'ADD_TRIP':
                //     return {...state, trips: [...state.trips, action.payload]}
        
        







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
