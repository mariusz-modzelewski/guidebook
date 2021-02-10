import React from 'react';
import '../assets/css/main.css';
import { ConnectedFilterForm } from './FilterForm'
import { mapStateToProps, mapDispatchToProps } from "./appState";
import { connect } from "react-redux";

class FilterMenu extends React.Component {
    state = {
        open: false,
    }
    handleFilterMenuClick() {
        this.setState({
            open: !this.state.open
        });
    }
    render() {
        return (
            < aside className="filter-menu" >
                <button className={this.state.open ? "filter-menu-btn filter-menu-btn--active" : "filter-menu-btn"}
                    aria-expanded="false" onClick={() => this.handleFilterMenuClick()}>
                    <img className="icon" src="/img/filter-icon.png" alt="filter menu icon" />
                </button>
                <div className={this.state.open ? "filter-menu__filters filter-menu__filters--active" : "filter-menu__filters"}>
                    <h3>Filtry</h3>
                    <ConnectedFilterForm />
                </div>
            </aside >
        )
    }
}

export const ConnectedFilterMenu = connect(mapStateToProps, mapDispatchToProps)(FilterMenu);

