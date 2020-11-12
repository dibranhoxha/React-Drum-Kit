import React, { Component } from 'react';
import Drum from './Drum';

export default class BoxContainer extends Component {
    render() {
        let bank = this.props.bank;
        return (
            <div className="buttons-container">
                {bank.map(drum => <Drum key={bank.indexOf(drum)} letter={drum.keyTrigger} />)}
            </div>
        )
    }
}
