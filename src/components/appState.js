import * as actions from "./actions";
import { getFilteredPlaces } from "./selectors/getFilteredPlaces";
import { getFilteredEvents } from "./selectors/getFilteredEvents";

export const mapStateToProps = (state) => {
    return {
        places: getFilteredPlaces(state.places, state.activeTypePlaceFilters),
        events: getFilteredEvents(state.events, state.activeTypeEventFilters, 
            state.activeDateEventFilters),
        placeTypes: state.placeTypes,
        eventTypes: state.eventTypes,
        activeTypePlaceFilters: state.activeTypePlaceFilters,
        activeTypeEventFilters: state.activeTypeEventFilters,
        activeDateEventFilters: state.activeDateEventFilters,
        navigation: state.navigation,
        originPlace: state.originPlace,
        waypointsPlaces: state.waypointsPlaces,
        destinationPlace: state.destinationPlace,
        transport: state.transport,
    }
};

export const mapDispatchToProps = {
    ...actions
};

