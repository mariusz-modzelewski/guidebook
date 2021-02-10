import React from 'react';
import { Marker, InfoWindow } from 'react-google-maps';
import MyMarkerMoreInfo from './MyMarkerMoreInfo'
import '../assets/css/main.css';
import { Route, Switch } from 'react-router-dom';

class MyMarker extends React.Component {
    state = {
        isOpen: false,
        isMoreInfo: false,
    }
    handleToggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    handleToggleMoreInfo = () => {
        this.setState({
            isMoreInfo: !this.state.isMoreInfo
        });
    }
    compareDates = (date1, date2) => {
        if (date1 > date2)
            return ("date1"); //is greater
        else if (date1 < date2)
            return ("date2"); //is greater
        else
            return ("equal");
    }
    setMarkerColor = (startDate, endDate) => {
        const current = window.location.pathname;
        if (current === "/events") {
            const actualDate = new Date();

            const start = [...startDate];
            const s_year = `${start[0]}${start[1]}${start[2]}${start[3]}`;
            const s_month = `${start[5]}${start[6]}`;
            const s_day = `${start[8]}${start[9]}`;
            const s_hour = `${start[11]}${start[12]}`;
            const s_minutes = `${start[14]}${start[15]}`;
            const newStartDate = new Date(s_year, s_month - 1, s_day, s_hour, s_minutes);

            const end = endDate;
            const e_year = `${end[0]}${end[1]}${end[2]}${end[3]}`;
            const e_month = `${end[5]}${end[6]}`;
            const e_day = `${end[8]}${end[9]}`;
            const e_hour = `${end[11]}${start[12]}`;
            const e_minutes = `${end[14]}${end[15]}`;
            const newEndDate = new Date(e_year, e_month - 1, e_day, e_hour, e_minutes);

            const newerDate = this.compareDates(actualDate, newStartDate);
            switch (newerDate) {
                case 'date1':
                    if (this.compareDates(actualDate, newEndDate) === "date1")
                        return "/img/ei_r.png";
                    else
                        return "/img/ei_o.png";
                case 'date2':
                    return "/img/ei_g.png";
                case 'equal':
                    return "/img/ei_o.png";
                default:
                    return "/img/ei_r.png";
            }
        }
        else return "/img/ei_v.png";
    }
    actualEventState = (startDate, endDate) => {
        const current = window.location.pathname;
        if (current === "/events") {
            const actualDate = new Date();

            const start = [...startDate];
            const s_year = `${start[0]}${start[1]}${start[2]}${start[3]}`;
            const s_month = `${start[5]}${start[6]}`;
            const s_day = `${start[8]}${start[9]}`;
            const s_hour = `${start[11]}${start[12]}`;
            const s_minutes = `${start[14]}${start[15]}`;
            const newStartDate = new Date(s_year, s_month - 1, s_day, s_hour, s_minutes);

            const end = endDate;
            const e_year = `${end[0]}${end[1]}${end[2]}${end[3]}`;
            const e_month = `${end[5]}${end[6]}`;
            const e_day = `${end[8]}${end[9]}`;
            const e_hour = `${end[11]}${start[12]}`;
            const e_minutes = `${end[14]}${end[15]}`;
            const newEndDate = new Date(e_year, e_month - 1, e_day, e_hour, e_minutes);

            const newerDate = this.compareDates(actualDate, newStartDate);
            switch (newerDate) {
                case 'date1':
                    if (this.compareDates(actualDate, newEndDate) === "date1")
                        return "Zakończone";
                    else
                        return "W trakcie";
                case 'date2':
                    return "Nierozpoczęte";
                case 'equal':
                    return "W trakcie";
                default:
                    return "Zakończone";
            }
        }
        else return "";
    }
    eventStateColor = (timeState) => {
        switch (timeState) {
            case 'Zakończone':
                return "red";
            case 'Nierozpoczęte':
                return "green";
            case 'W trakcie':
                return "orange";
            default:
                return "red";
        }
    }
    render() {
        const { marker } = this.props;
        const { name, position, startDate, endDate, title, img, address } = marker;
        const { isOpen, isMoreInfo } = this.state;
        const { street, number, postalCode, city } = address;
        const { x, y } = position;
        return (
            <Marker
                key={name}
                position={{ lat: parseFloat(x), lng: parseFloat(y) }}
                onClick={this.handleToggle}
                icon={this.setMarkerColor(startDate, endDate)}
            >
                {
                    isOpen &&
                    <InfoWindow onCloseClick={this.handleToggle}>
                        <Switch>
                            <Route exact path={["/", "/places"]}>
                                <div className="marker-info-wrapper">
                                    <h3 className="marker-title">{title}</h3>
                                    {img && <img className="marker-photo" src={img} alt={title} />}
                                    <p>{`${street} ${number ? number : ""}, ${postalCode} ${city}`}</p>
                                    <button className="btn--secondary" onClick={() => this.handleToggleMoreInfo()}>Pokaż więcej</button>
                                </div>
                            </Route>
                            <Route exact path={"/events"}>
                                <div className="marker-info-wrapper">
                                    <h3 className="marker-title">{title}</h3>
                                    {img && <img className="marker-photo" src={img} alt={title} />}
                                    <p>{`${street} ${number ? number : ""}, ${postalCode} ${city}`}</p>
                                    <p>Stan: <span className={`event-state-color--${this.eventStateColor(this.actualEventState(startDate, endDate))}`}>{this.actualEventState(startDate, endDate)}</span></p>
                                    <button className="btn--secondary" onClick={() => this.handleToggleMoreInfo()}>Pokaż więcej</button>
                                </div>
                            </Route>
                        </Switch>
                    </InfoWindow>
                }
                {isMoreInfo && <MyMarkerMoreInfo marker={marker} handleToggleMoreInfo={this.handleToggleMoreInfo} />}
            </Marker >
        )
    }
}
export default MyMarker
