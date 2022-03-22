
// a reducer is really just a function (25 mins Part 4)
// default state is really only used the first time, previosutState is used after

export default function attendeeReducer(state = {attendees: []}, action) {
    // console.log(state, "-> state in attendeeReducer")
    // console.log(action, "-> action in attendeeReducer")
    // console.log(action.payload, "-> action.payload in attendeeReducer")
    // console.log(state.attendeees, "-> state.attendeees")
    // console.log(state, "-> state")

    console.log(action);
    switch (action.type) {
        case 'FETCH_ATTENDEES':
            // return [state.attendees: action.payload]
            // return action.payload 
            return {attendees: action.payload} //OG

        case 'ADD_ATTENDEE':
            // return [...state, action.attendees];
            return {...state, attendees: [...state.attendees, action.payload]}
  
        case 'DELETE_ATTENDEE':
            // let attendeesList = state.attendees.map(attendee => {
            //     if (attendee.id === action.payload.id) {
            //         return action.payload
            //     } else {
            //         return attendee
            //     }
            // })
            // console.log(attendeesList, 'attendeesList')
            // return {...state, attendees: attendeesList}
            return { 
                attendees: state.attendees.filter(attendee => attendee.id !== action.payload)
            }
        default:
            return state;
    }
}
