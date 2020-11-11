import React, { Component } from 'react';
import LetterBox from './LetterBox';

export default class BoxContainer extends Component {
    render() {
        return (
            <div className="letter-box-container">
                <LetterBox />
            </div>
        )
    }
}
