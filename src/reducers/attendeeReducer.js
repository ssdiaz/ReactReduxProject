
// a reducer is really just a function (25 mins Part 4)
// default state is really only used the first time, previosutState is used after

export default function attendeeReducer(state = {attendees: []}, action) {
    console.log(state, "-> this is state in function attendeeReducer")

    // debugger
    switch (action.type) {
        case 'FETCH_ATTENDEES':
            // return [...state, action.attendees];
            return {attendees: action.payload}
        default:
            return state;
    }
}
