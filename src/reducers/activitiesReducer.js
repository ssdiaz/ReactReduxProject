

export default function activitiesReducer(state = {activities: []}, action) {
    // console.log(state, ' -> in activities Reducer')
    // console.log(action)

    switch (action.type) {
        case 'FETCH_ACTIVITIES':
            return {activities: action.payload}
        default:
            return state;
    }

}