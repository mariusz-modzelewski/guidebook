import React from 'react';
import '../assets/css/main.css';

class HamburgerButton extends React.Component {
    state = {
        open: this.props.open ? this.props.open : false,
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.open !== this.state.open) {
            this.setState({ open: nextProps.open });
        }
    }
    handleClick() {
        this.setState({ open: !this.state.open });
    }
    render() {
        return (
            <div className="hamburger"
                onClick={this.props.onClick ? this.props.onClick :
                    () => { this.handleClick(); }}>
                <div className={this.state.open ? "line lineTop lineTop--open" : "line lineTop lineTop--close"} />
                <div className={this.state.open ? "line lineMiddle--open" : "line lineMiddle--close"} />
                <div className={this.state.open ? "line lineBottom lineBottom--open" : "line lineBottom lineBottom--close"} />
            </div>
        )
    }
}

export default HamburgerButton