export const destinationPlace = (state = {}, action) => {
    switch (action.type) {
        case 'DESTINATION_PLACE':
            return action.destinationNavPlace;
        default:
            return state
    }
}