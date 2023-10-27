import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ErrorPage extends Component {
  render() {
    return(
      <div>
        <Link to="/" class="text-3d">404</Link>
        <span class="caption">THE PAGE WAS NOT FOUND</span>
      </div>
    )
  }
}