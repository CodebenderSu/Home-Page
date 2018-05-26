import React, { Component } from 'react';
import '../utils/styles/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="header">
          Header
        </div>
        <div className="toolbar">
          <span className="social-media"> Social Media </span>
          <span className="tabs"> Tabs </span>
        </div>
        <div className="primary-links">
          Main Links
        </div>
        <hr />
        <div className="secondary-links">
          Misc Links
        </div>
      </div>
    );
  }
}

export default App;
