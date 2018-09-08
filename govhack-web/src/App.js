import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyMapComponent from './component/MyMapComponent'

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyMapComponent isMarkerShown />
      </div>
    );
  }
}

export default App;
