

export default function activitiesReducer(state = {activities: []}, action) {
    console.log(state, ' -> in activities Reducer')
    console.log(action.payload, 'activies ACTION.PAYLOAD activitiesReducer')

    switch (action.type) {
        case 'FETCH_ACTIVITIES':
            // return action.payload
            return {activities: action.payload}
        default:
            return state;
    }

}