import React, { Component } from 'react';

class ButtonCta1 extends React.Component {

    constructor(props) {
        super(props);
        this.addActiveClass = this.addActiveClass.bind(this);
        this.state = {
            active: false,
        };
    }

    addActiveClass() {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
    };

    render() {
        return (
            <div
                className={this.state.active ? 'button-cta1 is-active': 'button-cta1'} 
                onClick={this.addActiveClass}
            >cta1</div>
        )
    }
}

export default ButtonCta1;