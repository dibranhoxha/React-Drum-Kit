import React from 'react';
import DrumPad from "./components/DrumPad";
import Switch from './components/Switch';
import Screen from './components/DisplayScreen';
import VolumeSlider from './components/VolumeSlider';
import './App.css';
import { bankOne, bankTwo } from './data/drums-data'


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      powerClicked: true,
      bankClicked: false
    }
    this.handlePowerClick = this.handlePowerClick.bind(this);
    this.handleBankClick = this.handleBankClick.bind(this);
  }


  handlePowerClick() {
    this.setState(state => ({
      powerClicked: !state.powerClicked
    }))
  }

  handleBankClick() {
    this.setState(state => ({
      bankClicked: !state.bankClicked
    }))
  }

  render() {
    return (
      <div id="drum-machine" className="app-container">
        <div className="box-container">
          <DrumPad power={this.state.powerClicked} bank={this.state.bankClicked ? bankTwo : bankOne} />
        </div>
        <div className="controls-container">
          <Switch name="Power" clicked={this.state.powerClicked} func={this.handlePowerClick} />
          <Screen />
          <VolumeSlider />
          <Switch name="Bank" clicked={this.state.bankClicked} func={this.handleBankClick} />
        </div>
      </div>
    );
  }

}

export default App;
