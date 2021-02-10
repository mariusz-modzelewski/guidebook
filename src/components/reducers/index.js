import { combineReducers } from 'redux';

import { places } from './places';
import { events } from './events';
import { placeTypes } from './placeTypes';
import { eventTypes } from './eventTypes';
import { activeTypePlaceFilters } from "./activeTypePlaceFilters";
import { activeTypeEventFilters } from "./activeTypeEventFilters";
import { activeDateEventFilters } from "./activeDateEventFilters";
import { navigation } from "./navigation";
import { originPlace } from "./originPlace";
import { destinationPlace } from "./destinationPlace";
import { waypointsPlaces } from "./waypointsPlaces";
import { transport } from "./transport"

export default combineReducers({
    places,
    events,
    placeTypes,
    eventTypes,
    activeTypePlaceFilters,
    activeTypeEventFilters,
    activeDateEventFilters,
    navigation,
    originPlace,
    destinationPlace,
    waypointsPlaces,
    transport,
});