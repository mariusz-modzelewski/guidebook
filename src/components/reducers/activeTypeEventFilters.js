export const activeTypeEventFilters = (state = [], action) => {
    switch (action.type) {
        case 'SET_FILTER_EVENTS_TYPE':
            if (action.activeTypeEventFilters) {
                const destruct = [];
                action.activeTypeEventFilters.forEach(type => destruct.push(type.name));
                return [
                    ...destruct
                ];
            }
            else return state;
        case 'FILTER_EVENTS_ADD_TYPE':
            const EventsFilter = action.filterType;
            if (action.filterType !== "")
                action.activeTypeEventFilters.push(EventsFilter);
            return [
                ...action.activeTypeEventFilters
            ]
        case 'FILTER_EVENTS_REMOVE_TYPE':
            const eventsFilterRm = action.filterType;
            if (action.filterType !== "")
                for (let i = action.activeTypeEventFilters.length - 1; i >= 0; i--) {
                    if (action.activeTypeEventFilters[i] === eventsFilterRm) action.activeTypeEventFilters.splice(i, 1);
                }
            return [
                ...action.activeTypeEventFilters
            ]
        default:
            return state
    }
}