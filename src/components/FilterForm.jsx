import React from 'react';
import '../assets/css/main.css';
import { Route, Switch } from 'react-router-dom';
import { connect } from "react-redux";
import { ConnectedCheckbox } from "./Checkbox"
import { mapStateToProps, mapDispatchToProps } from "./appState";

class FilterForm extends React.Component {
    state = {
        showAll: true,
    }
    componentDidMount() {
        this.props.setFilterDateEvents(["all"]);
    }
    handleTimeChange = (e) => {
        if (e.target.checked) {
            this.props.filterEventsByDateAdd(this.props.activeDateEventFilters, e.target.value);
            // this.props.filterEventsByDate(e.target.value);
        } else {
            this.props.filterEventsByDateRemove(this.props.activeDateEventFilters, e.target.value);
        }
        if (e.target.value === 'all')
            this.setState({ showAll: !this.state.showAll });
    }
    handleTransportChange = (e) => {
        this.props.setTransportForm(e.currentTarget.value);
    }
    render() {
        return (
            <form id="filterform" method="POST" action="#" encType="multipart/form-data" autoComplete="off" noValidate>
                <Switch>
                    <Route exact path={["/", "/places"]}>
                        < div className="form-row" >
                            <div className="form-input-wrapper">
                                <h4 className="form-label">Typ miejsca</h4>
                                {this.props.placeTypes && this.props.placeTypes.map(type => (
                                    <ConnectedCheckbox
                                        key={`${type.id}-pkey`}
                                        id={`${type.id}-pid`}
                                        name={type.name}
                                    />
                                ))}
                            </div>
                        </div >
                        <div className="form-row">
                            <div className="form-input-wrapper">
                                <h4 className="form-label">Dojazd</h4>
                                <div className="form-input-wrapper">
                                    <select id="drive-opt" className="custom-select" onChange={this.handleTransportChange}>
                                        <option id="filterform-drive-1" value="WALKING">Pieszo</option>
                                        <option id="filterform-drive-2" value="BICYCLING">Rower</option>
                                        <option id="filterform-drive-3" value="DRIVING">Samochód osobowy</option>
                                        <option id="filterform-drive-4" value="TRANSIT">Komunikacja miejska</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </Route>
                    <Route exact path={"/events"}>
                        < div className="form-row" >
                            <div className="form-input-wrapper">
                                <h4 className="form-label">Typ wydarzenia</h4>
                                {this.props.eventTypes && this.props.eventTypes.map(type => (
                                    <ConnectedCheckbox
                                        key={`${type.id}-ekey`}
                                        id={`${type.id}-eid`}
                                        name={type.name}
                                    />
                                ))}
                            </div>
                        </div >
                        <div className="form-row">
                            <div className="form-input-wrapper">
                                <h4 className="form-label">Czas wydarzenia</h4>
                                <div className="form-checkbox-wrapper">
                                    <input className="form-checkbox" id="filterform-events-all" type="checkbox" name="filterform[option][]" value="all" onChange={this.handleTimeChange} checked={this.state.showAll} />
                                    <label htmlFor="filterform-events-all"><span className="form-control"></span>Pokaż wszystko</label>
                                </div>
                                <div className="form-checkbox-wrapper">
                                    <input className="form-checkbox" id="filterform-events-day" type="checkbox" name="filterform[option][]" value="day" onChange={this.handleTimeChange} />
                                    <label htmlFor="filterform-events-day"><span className="form-control"></span>Dzień</label>
                                </div>
                                <div className="form-checkbox-wrapper">
                                    <input className="form-checkbox" id="filterform-events-3days" type="checkbox" name="filterform[option][]" value="3days" onChange={this.handleTimeChange} />
                                    <label htmlFor="filterform-events-3days"><span className="form-control"></span>3 dni</label>
                                </div>
                                <div className="form-checkbox-wrapper">
                                    <input className="form-checkbox" id="filterform-events-week" type="checkbox" name="filterform[option][]" value="week" onChange={this.handleTimeChange} />
                                    <label htmlFor="filterform-events-week"><span className="form-control"></span>Tydzień</label>
                                </div>
                                <div className="form-checkbox-wrapper">
                                    <input className="form-checkbox" id="filterform-events-month" type="checkbox" name="filterform[option][]" value="month" onChange={this.handleTimeChange} />
                                    <label htmlFor="filterform-events-month"><span className="form-control"></span>Miesiąc</label>
                                </div>
                            </div>
                        </div>
                    </Route>
                </Switch>
            </form >
        )
    }
}

export const ConnectedFilterForm = connect(mapStateToProps, mapDispatchToProps)(FilterForm);
