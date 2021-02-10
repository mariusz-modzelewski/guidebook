export const placesFetched = (places) => ({
    type: 'FETCH_PLACES_SUCCESS',
    places
});

export const eventsFetched = (events) => ({
    type: 'FETCH_EVENTS_SUCCESS',
    events
});

export const placeTypesFetched = (placeTypes) => ({
    type: 'FETCH_PLACE_TYPES_SUCCESS',
    placeTypes
});

export const eventTypesFetched = (eventTypes) => ({
    type: 'FETCH_EVENT_TYPES_SUCCESS',
    eventTypes
});

export const setTransportForm = (transportForm) => ({
    type: "SET_TRANSPORT_FORM",
    transportForm
});

export const setFilterTypePlaces = (activeTypePlaceFilters) => ({
    type: "SET_FILTER_PLACES_TYPE",
    activeTypePlaceFilters
});

export const navOriginPlace = (originNavPlace) => ({
    type: "ORIGIN_PLACE",
    originNavPlace
});

export const navDestinationPlace = (destinationNavPlace) => ({
    type: "DESTINATION_PLACE",
    destinationNavPlace
});

export const navWaypointAdd = (waypoint) => ({
    type: "WAYPOINTS_PLACE_ADD",
    waypoint
});
export const navWaypointRemove = (waypoint) => ({
    type: "WAYPOINTS_PLACE_REMOVE",
    waypoint
});

export const setNavigation = (navigate) => ({
    type: "SET_NAVIGATION",
    navigate
});

export const setFilterTypeEvents = (activeTypeEventFilters) => ({
    type: "SET_FILTER_EVENTS_TYPE",
    activeTypeEventFilters
});

export const setFilterDateEvents = (activeDateEventFilters) => ({
    type: "SET_FILTER_EVENTS_DATE",
    activeDateEventFilters
});

export const filterPlacesByTypeAdd = (activeTypePlaceFilters, filterType) => ({
    type: "FILTER_PLACES_ADD_TYPE",
    activeTypePlaceFilters,
    filterType
});
export const filterPlacesByTypeRemove = (activeTypePlaceFilters, filterType) => ({
    type: "FILTER_PLACES_REMOVE_TYPE",
    activeTypePlaceFilters,
    filterType
});
export const filterEventsByTypeAdd = (activeTypeEventFilters, filterType) => ({
    type: "FILTER_EVENTS_ADD_TYPE",
    activeTypeEventFilters,
    filterType
});
export const filterEventsByTypeRemove = (activeTypeEventFilters, filterType) => ({
    type: "FILTER_EVENTS_REMOVE_TYPE",
    activeTypeEventFilters,
    filterType
});

export const filterEventsByDateAdd = (activeDateEventFilters, filterDate) => ({
    type: "FILTER_EVENTS_ADD_DATE",
    activeDateEventFilters,
    filterDate
});
export const filterEventsByDateRemove = (activeDateEventFilters, filterDate) => ({
    type: "FILTER_EVENTS_REMOVE_DATE",
    activeDateEventFilters,
    filterDate
});
export const fetchPlaces = () => (dispatch, getState) => {
    fetch('http://127.0.0.1:8000/przewodnik/place/', {
        method: 'GET',
        headers: {
            'Authorization': 'Token 9b2cb66ea4f7b157ebf527c887b8b752fe318cba'
        }
    }).then(
        resolved => resolved.json(),
        rejected => console.log(`Promise Rejected: ${rejected}`)
    ).then(
        resolved => dispatch(placesFetched(resolved)),
        rejected => console.log(`Promise Rejected: ${rejected}`)
    );
};

export const fetchEvents = () => (dispatch, getState) => {
    fetch('http://127.0.0.1:8000/przewodnik/event/', {
        method: 'GET',
        headers: {
            'Authorization': 'Token 9b2cb66ea4f7b157ebf527c887b8b752fe318cba'
        }
    }).then(
        resolved => resolved.json(),
        rejected => console.log(`Promise Rejected: ${rejected}`)
    ).then(
        resolved => dispatch(eventsFetched(resolved)),
        rejected => console.log(`Promise Rejected: ${rejected}`)
    );
};

export const fetchPlaceTypes = () => (dispatch, getState) => {
    fetch('http://127.0.0.1:8000/przewodnik/placetypes', {
        method: 'GET',
        headers: {
            'Authorization': 'Token 9b2cb66ea4f7b157ebf527c887b8b752fe318cba'
        }
    }).then(
        resolved => resolved.json(),
        rejected => console.log(`Promise Rejected: ${rejected}`)
    ).then(
        resolved => dispatch(placeTypesFetched(resolved)),
        rejected => console.log(`Promise Rejected: ${rejected}`)
    );
    fetch('http://127.0.0.1:8000/przewodnik/placetypes', {
        method: 'GET',
        headers: {
            'Authorization': 'Token 9b2cb66ea4f7b157ebf527c887b8b752fe318cba'
        }
    }).then(
        resolved => resolved.json(),
        rejected => console.log(`Promise Rejected: ${rejected}`)
    ).then(
        resolved => dispatch(setFilterTypePlaces(resolved)),
        rejected => console.log(`Promise Rejected: ${rejected}`)
    );
};
export const fetchEventTypes = () => (dispatch, getState) => {
    fetch('http://127.0.0.1:8000/przewodnik/eventtypes', {
        method: 'GET',
        headers: {
            'Authorization': 'Token 9b2cb66ea4f7b157ebf527c887b8b752fe318cba'
        }
    }).then(
        resolved => resolved.json(),
        rejected => console.log(`Promise Rejected: ${rejected}`)
    ).then(
        resolved => dispatch(eventTypesFetched(resolved)),
        rejected => console.log(`Promise Rejected: ${rejected}`)
    );
    fetch('http://127.0.0.1:8000/przewodnik/eventtypes', {
        method: 'GET',
        headers: {
            'Authorization': 'Token 9b2cb66ea4f7b157ebf527c887b8b752fe318cba'
        }
    }).then(
        resolved => resolved.json(),
        rejected => console.log(`Promise Rejected: ${rejected}`)
    ).then(
        resolved => dispatch(setFilterTypeEvents(resolved)),
        rejected => console.log(`Promise Rejected: ${rejected}`)
    );
};