export const originPlace = (state = {}, action) => {
    switch (action.type) {
        case 'ORIGIN_PLACE':
            return action.originNavPlace;
        default:
            return state
    }
}