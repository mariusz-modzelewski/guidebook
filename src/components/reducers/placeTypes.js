export const placeTypes = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_PLACE_TYPES_SUCCESS':
            if (action.placeTypes)
                return [
                    ...action.placeTypes
                ]
            else return state;
        default:
            return state
    }
}