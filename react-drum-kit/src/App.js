import './App.css';
import React from 'react';
import BoxContainer from "./components/BoxContainer";
import Switch from './components/Switch';
import Screen from './components/DisplayScreen';
import VolumeSlider from './components/VolumeSlider';


class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <div className="box-container">
          <BoxContainer />
        </div>
        <div className="action-container">
          <Switch />
          <Screen />
          <VolumeSlider />
          <Switch />
        </div>s
      </div>
    );
  }

}

export default App;
