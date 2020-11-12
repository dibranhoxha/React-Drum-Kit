import React from 'react';
import DrumPad from "./components/DrumPad";
import Switch from './components/Switch';
import Screen from './components/DisplayScreen';
import VolumeSlider from './components/VolumeSlider';
import './App.css';
import { bankOne, bankTwo } from './data/drums-data'


class App extends React.Component {
  render() {
    return (
      <div id="drum-machine" className="app-container">
        <div className="box-container">
          <DrumPad bank={bankOne} />
        </div>
        <div className="controls-container">
          <Switch />
          <Screen />
          <VolumeSlider />
        </div>
      </div>
    );
  }

}

export default App;
