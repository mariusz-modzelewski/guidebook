import * as React from 'react';
import '../assets/css/main.css';
import { Route, Switch } from 'react-router-dom';
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./appState";

class Checkbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = { checked: true }
        this.handlePlaceChange = this.handlePlaceChange.bind(this);
        this.handleEventChange = this.handleEventChange.bind(this);
    }
    componentWillUnmount() {
        const current = window.location.pathname;
        if (current === "/events") {
            if (!this.state.checked) {
                this.props.filterPlacesByTypeAdd(this.props.activeTypePlaceFilters, this.props.name);
            }
        }
        else {
            if (!this.state.checked) {
                this.props.filterEventsByTypeAdd(this.props.activeTypeEventFilters, this.props.name);
            }
        }
    }
    handlePlaceChange(e) {
        if (!this.state.checked) {
            this.props.filterPlacesByTypeAdd(this.props.activeTypePlaceFilters, e.target.value);
        } else {
            this.props.filterPlacesByTypeRemove(this.props.activeTypePlaceFilters, e.target.value);
            this.props.places.forEach(place => {
                if (place.type.name === e.target.value) {
                    this.props.navWaypointRemove(place);
                    if (place === this.props.originPlace) {
                        this.props.navOriginPlace({});
                        this.props.setNavigation("false");
                    } else if (place === this.props.destinationPlace) {
                        this.props.navDestinationPlace({});
                        this.props.setNavigation("false");
                    }
                }
            });
        }
        this.setState({
            checked: e.target.checked
        })
    }
    handleEventChange(e) {
        if (!this.state.checked) {
            this.props.filterEventsByTypeAdd(this.props.activeTypeEventFilters, e.target.value);
        } else {
            this.props.filterEventsByTypeRemove(this.props.activeTypeEventFilters, e.target.value);
        }
        this.setState({
            checked: e.target.checked
        })
    }
    render() {
        const { name } = this.props;
        return (
            <div className="form-checkbox-wrapper">
                <Switch>
                    <Route exact path={["/", "/places"]}>
                        <input className="form-checkbox"
                            id={`filterform-${name}-pid`}
                            type="checkbox" name="filterform[option][]"
                            value={name}
                            onChange={this.handlePlaceChange}
                            checked={this.state.checked} />
                        <label htmlFor={`filterform-${name}-pid`}><span className="form-control"></span>{name}</label>
                    </Route>
                    <Route exact path={"/events"}>
                        <input className="form-checkbox"
                            id={`filterform-${name}-eid`}
                            type="checkbox" name="filterform[option][]"
                            value={name}
                            onChange={this.handleEventChange}
                            checked={this.state.checked} />
                        <label htmlFor={`filterform-${name}-eid`}><span className="form-control"></span>{name}</label>
                    </Route>
                </Switch>
            </div>
        );
    }
}

export const ConnectedCheckbox = connect(mapStateToProps, mapDispatchToProps)(Checkbox);