export const places = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_PLACES_SUCCESS':
            if (action.places)
                return [
                    ...action.places
                ]
            else return state;
        default:
            return state
    }
}