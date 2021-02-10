export const getFilteredPlaces = (places, activeTypePlaceFilters) => {
    const filteredPlaces = [];

    places.forEach(place => {
        activeTypePlaceFilters.forEach(type => {
            if(place.type.name === type)
                filteredPlaces.push(place);
        })
    });
    return filteredPlaces;
}
