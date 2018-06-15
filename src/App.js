import React, { Component } from 'react';
import SkiDayCount from './components/SkiDayCount';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SkiDayCount
            total={50}
            powder={20}
            backcountry={10}
            goal={100}
        />
      </div>
    );
  }
}

export default App;
