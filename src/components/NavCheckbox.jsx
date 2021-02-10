import * as React from 'react';
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./appState";
import '../assets/css/main.css';

class NavCheckbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = { checked: false }
        this.handleWaypointChange = this.handleWaypointChange.bind(this);
    }
    handleWaypointChange(e) {
        if (!this.state.checked) {
            this.props.navWaypointAdd(this.props.place);
        } else {
            this.props.navWaypointRemove(this.props.place);
        }
        this.setState({
            checked: e.target.checked
        })
    }
    returnWaypointNumber = () => {
        const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        let result = "";
        this.props.waypointsPlaces.forEach((place, index) => {
            if (place === this.props.place) {
                result = `[${letters[index + 1]}]`;
            }
        })
        return result;
    }
    render() {
        const { id, title } = this.props;
        return (
            <div className="form-checkbox-wrapper">
                <input className="form-checkbox" id={`filterform-${title}-nav`}
                    type="checkbox" name="filterform[option][]" value={id}
                    onChange={this.handleWaypointChange} checked={this.state.checked}
                />
                <label htmlFor={`filterform-${title}-nav`}>
                    <span className="form-control"></span>{title}
                    <span className="waypoint-number"> {this.returnWaypointNumber()}</span>
                </label>
            </div>
        );
    }
}

export const ConnectedNavCheckbox = connect(mapStateToProps, mapDispatchToProps)(NavCheckbox);
