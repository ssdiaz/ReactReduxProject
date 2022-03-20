
// a reducer is really just a function (25 mins Part 4)
// default state is really only used the first time, previosutState is used after

export default function attendeeReducer(state = {attendees: []}, action) {
    // switch (action.type) {
    //     case 'ADD_CANDY':
    //         return [...state, action.candy];
    //     default:
            
            console.log(state)
            console.log(action.payload)
            
            return action.payload;
            // return state;
//         // }
}
