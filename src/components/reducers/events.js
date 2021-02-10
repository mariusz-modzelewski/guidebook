export const events = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_EVENTS_SUCCESS':
            if (action.events)
                return [
                    ...action.events
                ]
            else return state;
        default:
            return state
    }
}