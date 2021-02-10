import React from 'react';
import '../assets/css/main.css';
import HamburgerButton from './HamburgerButton'
import HeaderMenuItem from './HeaderMenuItem'

class HamburgerMenu extends React.Component {
    state = {
        menuOpen: false,
    }

    handleMenuClick() {
        this.setState({ menuOpen: !this.state.menuOpen });
    }

    handleLinkClick() {
        this.setState({ menuOpen: false });
    }

    render() {
        return (
            <div className="hamburger-menu">
                <div className="btn-container">
                    <HamburgerButton open={this.state.menuOpen} onClick={() => this.handleMenuClick()} />
                </div>
                <Menu open={this.state.menuOpen}>
                    <div className="item-container">
                        <div
                            className="hamburger__menu-item"
                            onClick={() => { this.handleLinkClick(); }}
                        >
                            <HeaderMenuItem name="Miejsca" link="/places" />
                        </div>
                        <div className="menu-item__line" />
                    </div >
                    <div className="item-container">
                        <div
                            className="hamburger__menu-item"
                            onClick={() => { this.handleLinkClick(); }}
                        >
                            <HeaderMenuItem name="Wydarzenia" link="/events" />
                        </div>
                        <div className="menu-item__line" />
                    </div >
                    <div className="item-container">
                        <div
                            className="hamburger__menu-item"
                            onClick={() => { this.handleLinkClick(); }}
                        >
                            <HeaderMenuItem name="Instrukcja" link="/instruction" />
                        </div>
                        <div className="menu-item__line" />
                    </div >
                </Menu>
            </div>
        )
    }
}
class Menu extends React.Component {
    state = {
        open: this.props.open ? this.props.open : false,
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.open !== this.state.open) {
            this.setState({ open: nextProps.open });
        }
    }
    render() {
        return (
            <div className={this.state.open ? "hamburger-menu-container hamburger-menu-container--open" : "hamburger-menu-container"}>
                {
                    this.state.open ?
                        <div className="hamburger-menu-list">
                            {this.props.children}
                        </div> : null
                }
            </div>
        )
    }
}

export default HamburgerMenu