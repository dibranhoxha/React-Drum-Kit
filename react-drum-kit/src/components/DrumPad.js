import React, { Component } from 'react';
import Drum from './Drum';

export default class DrumPad extends Component {


    render() {
        let bank = this.props.bank;
        return (
            <div className="buttons-container">
                {
                    bank.map(drum => {
                        return (
                            <Drum
                                key={bank.indexOf(drum)}
                                drum={drum}
                                play={this.props.power}
                            />
                        )
                    })
                }
            </div>
        )
    }
}
