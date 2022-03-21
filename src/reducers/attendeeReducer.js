
// a reducer is really just a function (25 mins Part 4)
// default state is really only used the first time, previosutState is used after

export default function attendeeReducer(state = [], action) {
    // console.log(state, "-> state in attendeeReducer")
    // console.log(action, "-> action in attendeeReducer")
    console.log(action.payload, "-> action.payload in attendeeReducer")
    // console.log(state.attendeees, "-> state.attendeees")
    console.log(state, "-> state")

    // debugger
    switch (action.type) {
        case 'FETCH_ATTENDEES':
            // return [state.attendees: action.payload]
            // return action.payload 
            return {attendees: action.payload} //OG
        case 'ADD_ATTENDEE':
            // return [...state, action.attendees];
            return {...state, attendees: [...state.attendees, action.payload]}
            // return {...state, attendees: [...state.attendees, action.payload]}
        default:
            return state;
    }
}
