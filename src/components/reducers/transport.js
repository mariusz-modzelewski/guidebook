export const transport = (state = 'WALKING', action) => {
    switch (action.type) {
        case 'SET_TRANSPORT_FORM':
            return action.transportForm;
        default:
            return state
    }
}