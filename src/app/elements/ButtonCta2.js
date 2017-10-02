import React, { Component } from 'react';

class ButtonCta2 extends React.Component {
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
                className={this.state.active ? 'button-cta2 is-active': 'button-cta2'} 
                onClick={this.addActiveClass}
            >cta2</div>
        )
    }
}

export default ButtonCta2;