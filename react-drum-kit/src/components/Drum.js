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
        let checkClass;
        const sound = document.getElementById(this.props.drum.keyTrigger);
        if (this.props.play) {
            sound.currentTime = 0;
            sound.play();
            checkClass = "drum-active";
        }
        else {
            checkClass = "drum-not-active";
        }
        sound.parentNode.classList.add(checkClass);
        setTimeout(() => sound.parentNode.classList.remove(checkClass), 100,);

    }

    handleKeyPress(e) {
        if (e.keyCode === this.props.drum.keyCode) {
            this.playSound();
        }
    }
    render() {
        let { keyTrigger, url } = this.props.drum;
        return (
            <div className="drum-pad" onClick={this.props.play ? this.playSound : ''} >
                <audio className="clip" id={keyTrigger} src={url}></audio>
                <span>{keyTrigger}</span>
            </div>
        )
    }
}
