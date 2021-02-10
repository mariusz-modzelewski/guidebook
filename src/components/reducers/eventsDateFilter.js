export const eventsDateFilter = (state = '', action) => {
    switch (action.type) {
        case 'FILTER_DATE_EVENTS':
            return action.filterDate;
        default:
            return state
    }
}