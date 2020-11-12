import React, { Component } from 'react'

export default class LetterBox extends Component {
    render() {
        console.log(this.props.letter)
        return (
            <div className="drum-pad">
                <span>{this.props.letter}</span>
                <audio id="Q" src=""></audio>
            </div>
        )
    }
}
