
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
    console.log(state, 'state in attendeeReducer (pre)')

    switch (action.type) {
        case 'UPDATE_ATTENDEES':
            // console.log(state, 'state IN UPDAT_ATT') //=> NO WE'R'E SETTING STATE HERE ..............THIS IS MY ISSUE!!!!!!!!!!!!!!!!!!!!!!! why isnt htis updating
            return {
                // ...state,
                attendees: action.payload
            }

        // case 'FETCH_ATTENDEES':
        //     // return [state.attendees: action.payload]
        //     // return action.payload 
        //     return {attendees: action.payload} //OG

        case 'ADD_ATTENDEE':
            // return [...state, action.attendees];
            console.log(state.attendees, 'state in addAtt')
            console.log(action.payload, 'action payload')
            // return {
                // ...state, 
                // attendees: [...state, action.payload]
                return [...state.attendees, action.payload]
            // }
  
        case 'DELETE_ATTENDEE':
            // console.log(state.attendees, 'delete pre state.attendees')

            let attendeesList = state.attendees.map(attendee => {
                if (attendee.id === action.payload.id) {
                    return action.payload
                } else {
                    return attendee
                }
            })
            // let attendeesList = state.attendees.filter(attendee => attendee.id !== action.payload.id)
            console.log(attendeesList, 'attendeesList')
            console.log(action.payload, 'action.payload')

            return { 
                // attendees: state.attendees.filter(attendee => attendee.id !== action.payload)
                // attendees: state.attendees.filter(attendee => attendee.id !== action.payload.id)
                ...state, attendees: attendeesList
            }
        default:
            return state;
    }
}
