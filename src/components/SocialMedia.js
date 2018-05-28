import React, { Component } from 'react';
import * as Google from '../utils/images/google.png';

class SocialMedia extends Component {
  render() {
    return (
      <span className="social-media">
        <div className="google-search">
        <a href="https://www.google.com/search"><img src={Google} /></a>
        <div className="google-search-content">
          <form action="https://www.google.com/search" method="get" target="_blank">
            <input type="hidden" value="" />
            <input autocomplete="on" name="q" placeholder="Search Google" required="required"  type="text" />
            <button type="submit">Search</button>
          </form>
        </div>
        </div>
      </span>
    );
  };
};

export default SocialMedia;
