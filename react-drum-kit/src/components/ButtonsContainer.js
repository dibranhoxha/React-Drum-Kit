import React, { Component } from 'react';
import Button from './LetterButton';

export default class BoxContainer extends Component {
    render() {
        return (
            <div className="buttons-container">
                <Button />
                <Button />
                <Button />
                <Button />
                <Button />
                <Button />
                <Button />
                <Button />
                <Button />
            </div>
        )
    }
}
