import React from 'react';
import ButtonsContainer from "./components/ButtonsContainer";
import Switch from './components/Switch';
import Screen from './components/DisplayScreen';
import VolumeSlider from './components/VolumeSlider';
import './App.css';


class App extends React.Component {
  render() {
    return (
      <div id="drum-machine" className="app-container">
        <div className="box-container">
          <ButtonsContainer />
        </div>
        <div className="action-container">
          <Switch />
          <Screen />
          <VolumeSlider />
          <Switch />
        </div>
      </div>
    );
  }

}

export default App;
