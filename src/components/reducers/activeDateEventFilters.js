export const activeDateEventFilters = (state = [], action) => {
    switch (action.type) {
        case 'SET_FILTER_EVENTS_DATE':
            if (action.activeDateEventFilters) {
                const start = [];
                action.activeDateEventFilters.forEach(type => start.push(type));
                return [
                    ...start
                ];
            }
            else return state;
        case 'FILTER_EVENTS_ADD_DATE':
            const EventsFilter = action.filterDate.toLowerCase();
            if (action.filterDate !== "")
                action.activeDateEventFilters.push(EventsFilter);
            return [
                ...state
            ]
        case 'FILTER_EVENTS_REMOVE_DATE':
            const eventsFilterRm = action.filterDate.toLowerCase();
            if (action.filterDate !== "")
                for (let i = action.activeDateEventFilters.length - 1; i >= 0; i--) {
                    if (action.activeDateEventFilters[i] === eventsFilterRm) action.activeDateEventFilters.splice(i, 1);
                }
            return [
                ...state
            ]
        default:
            return state
    }
}