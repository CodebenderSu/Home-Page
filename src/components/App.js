import React, { Component } from 'react';
import Iframe from 'react-iframe';
import Header from './Header.js';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="toolbar">
          <span className="social-media"> Social Media </span>
          <span className="tabs"> Tabs </span>
        </div>
        <div className="primary-links">
          Main Links

          <form action="https://www.google.com/search" method="get" target="_blank">
            <input type="hidden" value="" />
            <input autocomplete="on" name="q" placeholder="Search Google" required="required"  type="text" />
            <button type="submit">Search</button>
          </form>

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
