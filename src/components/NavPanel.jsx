/* eslint-disable no-undef */
import React from 'react';
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./appState";
import { ConnectedNavCheckbox } from './NavCheckbox';
import '../assets/css/main.css';

const isEmpty = (obj) => {
    for (var key in obj) {
        if (obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

class NavPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = { open: false }
        this.handleNavPanelClick = this.handleNavPanelClick.bind(this);
        this.handleOriginPlaceChange = this.handleOriginPlaceChange.bind(this);
        this.navigate = this.navigate.bind(this);
    }
    handleNavPanelClick() {
        this.setState({
            open: !this.state.open
        });
    }
    navigate = () => {
        if (isEmpty(this.props.originPlace.position))
            alert("Wybierz skąd nawigować!");
        else if (isEmpty(this.props.destinationPlace))
            alert("Wybierz dokąd nawigować!");
        else {
            if (this.props.navigation === "true") {
                this.props.setNavigation("false");
                this.textPanelClear();
            }
            else this.props.setNavigation("true");
        }
    }
    handleOriginPlaceChange = (e) => {
        if (e.currentTarget.value !== "not-chosen") {
            this.props.navOriginPlace(this.props.places[e.currentTarget.value]);
            this.props.navWaypointRemove(this.props.places[e.currentTarget.value]);
        }
        else {
            this.props.setNavigation("false");
            alert("Wybierz skąd nawigować!");
        }
    }
    handleDestinationPlaceChange = (e) => {
        if (e.currentTarget.value !== "not-chosen") {
            this.props.navDestinationPlace(this.props.places[e.currentTarget.value]);
            this.props.navWaypointRemove(this.props.places[e.currentTarget.value]);
        }
        else {
            this.props.setNavigation("false");
            alert("Wybierz dokąd nawigować!");
        }
    }
    textPanelClear = () => {
        const panel = document.getElementById('directions-panel');
        panel.textContent = "";
    }
    componentWillUnmount() {
        this.props.setNavigation("false");
        this.props.navOriginPlace({});
        this.props.navDestinationPlace({});
        this.props.places.map(place => this.props.navWaypointRemove(place));
        this.props.setTransportForm('WALKING');
        this.textPanelClear();
    }
    render() {
        return (
            < aside className="navpanel" >
                <button className={this.state.open ? "navpanel-btn navpanel-btn--active" : "navpanel-btn"}
                    aria-expanded="false" onClick={this.handleNavPanelClick}
                >
                    <img className="icon" src="/img/nav-icon.png" alt="Navigation icon" />
                </button >
                <div className={this.state.open ? "navpanel__filters navpanel__filters--active" : "navpanel__filters"}>
                    <div className="navpanel__wrapper">
                        <div>
                            <button className="navpanel__close-btn" aria-expanded="false"
                                onClick={() => this.handleNavPanelClick()}>
                                <span className="close-btn__box">
                                    <span className="close-btn__inner"></span>
                                </span>
                            </button>
                        </div>
                        <div className="navpanel__navigation">
                            <label className="navpanel__label" htmlFor="start">Początek:</label>
                            <select id="start" className="custom-select" onChange={this.handleOriginPlaceChange}>
                                <option key="choose-start" value="not-chosen" >--wybierz--</option>
                                {this.props.places && this.props.places.map((place, index) => (
                                    <option key={`${place.id}-start`} value={index} >{place.title}</option>
                                ))}
                            </select>
                            <strong>Punkty pośrednie:</strong>
                            <div className="navpanel__waypoints">
                                {this.props.places && this.props.places.map((place) => {
                                    if (place !== this.props.originPlace && place !== this.props.destinationPlace)
                                        return <ConnectedNavCheckbox
                                            key={place.id}
                                            id={place.id}
                                            title={place.title}
                                            place={place}
                                        />
                                    else return null;
                                })}
                            </div>
                            <label className="navpanel__label" htmlFor="end">Koniec:</label>
                            <select id="end" className="custom-select" onChange={this.handleDestinationPlaceChange}>
                                <option key="choose-end" value="not-chosen" >--wybierz--</option>
                                {this.props.places && this.props.places.map((place, index) => (
                                    <option key={`${place.id}-end`} value={index}>{place.title}</option>
                                ))}
                            </select>
                            <br />
                            <button onClick={this.navigate} className="btn">{`${(this.props.navigation === "false") ? "Nawiguj" : "Przestań nawigować"}`}</button>
                        </div>
                        <div id="directions-panel">
                        </div>
                    </div>
                </div>
            </aside >
        );
    }
}

export const ConnectedNavPanel = connect(mapStateToProps, mapDispatchToProps)(NavPanel);