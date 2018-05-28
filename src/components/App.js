import React, { Component } from 'react';
import Iframe from 'react-iframe';
import Header from './Header.js';
import SocialMedia from './SocialMedia.js';

class App extends Component {
  render() {
    return (
      <div className="foreground">
        <Header />
        <div className="toolbar">
          <SocialMedia />
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
  };
};

export default App;
