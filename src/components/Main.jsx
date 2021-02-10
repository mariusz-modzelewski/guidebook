import * as React from 'react';
import '../assets/css/main.css';
import { Route, Switch } from 'react-router-dom';
import { ConnectedMyMap } from "./MyMap";
import { ConnectedFilterMenu } from './FilterMenu';
import { ConnectedNavPanel } from './NavPanel';
import { connect } from "react-redux";
import { withScriptjs } from "react-google-maps";
import Instruction from './Instruction';
import ErrorPage from './ErrorPage'
import { mapStateToProps, mapDispatchToProps } from "./appState";

class Main extends React.Component {
    componentDidMount() {
        this.props.fetchPlaces();
        this.props.fetchEvents();
        this.props.fetchPlaceTypes();
        this.props.fetchEventTypes();
    }
    render() {
        const MapLoader = withScriptjs(ConnectedMyMap);
        const key = 'YOUR_KEY';
        return (
            <main className="main" >
                <Switch>
                    <Route exact path={["/", "/places"]}>
                        <ConnectedNavPanel />
                        <ConnectedFilterMenu />
                        <MapLoader
                            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${key}`}
                            loadingElement={<div style={{ height: `100%` }} />}
                        />
                    </Route>
                    <Route exact path={"/events"}>
                        <ConnectedFilterMenu />
                        <MapLoader
                            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${key}`}
                            loadingElement={<div style={{ height: `100%` }} />}
                        />
                    </Route>
                    <Route exact path={"/instruction"}>
                        <Instruction />
                    </Route>
                    <Route component={ErrorPage} />
                </Switch>
            </main>
        )
    }
}

export const ConnectedMain = connect(mapStateToProps, mapDispatchToProps)(Main);