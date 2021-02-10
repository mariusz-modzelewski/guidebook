export const activeTypePlaceFilters = (state = [], action) => {
    switch (action.type) {
        case 'SET_FILTER_PLACES_TYPE':
            if (action.activeTypePlaceFilters) {
                const destruct = [];
                action.activeTypePlaceFilters.forEach(type => destruct.push(type.name));
                return [
                    ...destruct
                ];
            }
            else return state;
        case 'FILTER_PLACES_ADD_TYPE':
            const placesFilter = action.filterType;
            if (action.filterType !== "" && !action.activeTypePlaceFilters.includes(placesFilter))
                action.activeTypePlaceFilters.push(placesFilter);
            return [
                ...action.activeTypePlaceFilters
            ]
        case 'FILTER_PLACES_REMOVE_TYPE':
            const placesFilterRm = action.filterType;
            if (action.filterType !== "")
                for (let i = action.activeTypePlaceFilters.length - 1; i >= 0; i--) {
                    if (action.activeTypePlaceFilters[i] === placesFilterRm) action.activeTypePlaceFilters.splice(i, 1);
                }
            return [
                ...action.activeTypePlaceFilters
            ]
        default:
            return state
    }
}