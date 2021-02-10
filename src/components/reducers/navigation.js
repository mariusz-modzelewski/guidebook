export const navigation = (state = 'false', action) => {
    switch (action.type) {
        case 'SET_NAVIGATION':
            return action.navigate;
        default:
            return state
    }
}