import React, { Component } from 'react';

export default class Loader extends Component {
  render() {
    return (
      <div className="loading">
        <img alt="Site Loader" id="loading" src="/assets/img/spirulina_logo.png" />
      </div>
    );
  }
}
