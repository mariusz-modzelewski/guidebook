import React from 'react';
import '../assets/css/main.css';
import { Route, Switch } from 'react-router-dom';

const MyMarkerMoreInfo = (props) => {
    const days = ["Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota", "Niedziela"];
    const months = ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"];

    const showDate = (date) => {
        const current = window.location.pathname;
        if (current === "/events") {
            const newDate = [...date];
            const year = `${newDate[0]}${newDate[1]}${newDate[2]}${newDate[3]}`;
            const month = `${newDate[5]}${newDate[6]}`;
            const day = `${newDate[8]}${newDate[9]}`;
            const hour = `${newDate[11]}${newDate[12]}`;
            const minutes = `${newDate[14]}${newDate[15]}`;
            const resultDate = new Date(year, month - 1, day, hour, minutes);

            const monthNr = month < 10 ? month[1] : month;
            const result = `${days[resultDate.getDay()]}, ${day} ${months[monthNr - 1]} ${year}r. ${hour}:${minutes}`;
            return `${result}`;
        }
    }
    const { marker } = props;
    return (
        <aside className="more-info" >
            <button className="close-btn" onClick={props.handleToggleMoreInfo}>
                <span className="close-btn__box">
                    <span className="close-btn__inner"></span>
                </span>
            </button>
            <Switch>
                <Route exact path={["/", "/places"]}>
                    <div className="more-info__wrapper">
                        {marker.img && <img className="moreinfo-marker-photo" src={marker.img} alt={marker.title} />}
                        <div className="more-info__info-wrapper">
                            <h2>{marker.title}</h2>
                            <hr />
                            <h4>Opis:</h4>
                            <p>{marker.desc}</p>
                            <h4>Adres:</h4>
                            <p>{`${marker.address.street} ${marker.address.number ? `${marker.address.number},` : ""} ${marker.address.postalCode} ${marker.address.city}`}</p>
                            <h4>Współrzędne</h4>
                            <p>{`${marker.position.x}, ${marker.position.y}`}</p>
                            <h4>Typ miejsca:</h4>
                            <p>{marker.type.name}</p>
                            <hr />
                        </div>
                    </div>
                </Route>
                <Route exact path={"/events"}>
                    <div className="more-info__wrapper">
                        {marker.img && <img className="moreinfo-marker-photo" src={marker.img} alt={marker.title} />}
                        <div className="more-info__info-wrapper">
                            <h2>{marker.title}</h2>
                            <h3>{marker.organizer}</h3>
                            <hr />
                            <h3>Opis:</h3>
                            <p>{marker.desc}</p>
                            <h4>Adres:</h4>
                            <p>{`${marker.address.street} ${marker.address.number ? `${marker.address.number},` : ""} ${marker.address.postalCode} ${marker.address.city}`}</p>
                            <h4>Współrzędne</h4>
                            <p>{`${marker.position.x}, ${marker.position.y}`}</p>
                            <h4>Typ wydarzenia:</h4>
                            <p>{marker.type.name}</p>
                            <h4>Data rozpoczęcia:</h4>
                            <p>{showDate(marker.startDate)}</p>
                            <h4>Data zakończenia</h4>
                            <p>{showDate(marker.endDate)}</p>
                            <h4>Szczegóły:</h4>
                            <p>{marker.details}</p>
                            <h4>Link:</h4>
                            <a href={marker.url} target="blank">{marker.url}</a>
                            <hr />
                        </div>
                    </div>
                </Route>
            </Switch>
        </aside >
    )
}

export default MyMarkerMoreInfo