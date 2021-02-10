/* eslint-disable no-undef */
import React from 'react';
import { GoogleMap, withGoogleMap, DirectionsRenderer } from 'react-google-maps';
import { Route, Switch } from 'react-router-dom';
import MyMarker from './MyMarker';
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./appState";
import '../assets/css/main.css';

class MyMap extends React.Component {
    state = {
        directions: null,
        textDirections: null,
    }
    textPanel = () => {
        const current = window.location.pathname;
        if (current === "/places" || current === "/") {
            const panel = document.getElementById('directions-panel');
            panel.textContent = "";
            return panel;
        }
    }
    changeTransportForm = () => {
        const option = document.getElementById('drive-opt');
        option.value = 'WALKING';
    }
    handleNavigate = () => {
        if (this.props.navigation === "true") {
            const directionsService = new google.maps.DirectionsService();
            const origin = { lat: parseFloat(this.props.originPlace.position.x), lng: parseFloat(this.props.originPlace.position.y) };
            const destination = { lat: parseFloat(this.props.destinationPlace.position.x), lng: parseFloat(this.props.destinationPlace.position.y) };
            const navWaypoints = [];
            if (this.props.waypointsPlaces) {
                this.props.waypointsPlaces.forEach(place =>
                    navWaypoints.push({ location: new google.maps.LatLng(parseFloat(place.position.x), parseFloat(place.position.y)) })
                );
            }
            let transportForm = this.props.transport ? this.props.transport : 'WALKING';
            if (navWaypoints.length > 0 && transportForm === 'TRANSIT') {
                alert("Transport publiczny obsługuje tylko początek i miejsce końcowe!");
                this.props.setTransportForm('WALKING');
                this.changeTransportForm();
                transportForm = 'WALKING';
            }
            directionsService.route({
                origin: origin,
                destination: destination,
                travelMode: google.maps.TravelMode[transportForm],
                waypoints: [
                    ...navWaypoints
                ]
            }, (result, status) => {
                if (status === google.maps.DirectionsStatus.OK) {
                    this.setState({
                        directions: result,
                    });
                } else {
                    console.error(`error fetching directions ${result}`);
                }
            });
        }
    }
    componentDidMount() {
        this.handleNavigate();
    }
    render() {
        const MyMapWrapped = withGoogleMap(props => (
            <GoogleMap
                defaultZoom={14}
                defaultCenter={{ lat: 53.13235, lng: 23.15867 }}
                yesIWantToUseGoogleMapApiInternals
            >
                <Switch>
                    <Route exact path={["/", "/places"]}>
                        {
                            this.props.places &&
                            this.props.places.map(place => (
                                <MyMarker key={place.id} marker={place} />
                            ))
                        }
                        {this.state.directions && <DirectionsRenderer
                            directions={this.state.directions} panel={this.textPanel()}
                        ></DirectionsRenderer>}
                    </Route>
                    <Route exact path={`/events`}>
                        {
                            this.props.events &&
                            this.props.events.map(event => (
                                <MyMarker key={event.id} marker={event} />
                            ))
                        }
                    </Route>
                </Switch>
            </GoogleMap>
        ));
        return (
            <div id="map" >
                <MyMapWrapped
                    containerElement={<div style={{ height: `100%` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            </div >
        );
    }
}
export const ConnectedMyMap = connect(mapStateToProps, mapDispatchToProps)(MyMap);
