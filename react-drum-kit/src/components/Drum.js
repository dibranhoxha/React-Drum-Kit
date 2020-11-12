import React, { Component } from 'react'

export default class LetterBox extends Component {
    constructor(props) {
        super(props);
        this.playSound = this.playSound.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress);
    }
    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress);
    }

    playSound() {
        const sound = document.getElementById(this.props.drum.keyTrigger);
        sound.currentTime = 0;
        sound.play();
    }

    handleKeyPress(e) {
        if (e.keyCode === this.props.drum.keyCode) {
            this.playSound();
        }
    }
    render() {
        let { keyTrigger, url } = this.props.drum;
        return (
            <div className="drum-pad" onClick={this.playSound} >
                <audio className="clip" id={keyTrigger} src={url}></audio>
                <span>{keyTrigger}</span>
            </div>
        )
    }
}
