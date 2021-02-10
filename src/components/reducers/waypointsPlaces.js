export const waypointsPlaces = (state = [], action) => {
    switch (action.type) {
        case 'WAYPOINTS_PLACE_ADD':
            return [
                ...state, action.waypoint
            ]
        case 'WAYPOINTS_PLACE_REMOVE':
            for (let i = state.length - 1; i >= 0; i--) {
                if (state[i] === action.waypoint) state.splice(i, 1);
            }
            return [
                ...state
            ]
        default:
            return state
    }
}