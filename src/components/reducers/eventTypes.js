export const eventTypes = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_EVENT_TYPES_SUCCESS':
            if (action.eventTypes)
                return [
                    ...action.eventTypes
                ]
            else return state;
        default:
            return state
    }
}