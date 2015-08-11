import React, { Component } from 'react';
import { Link }             from 'react-router';

export default class Navigation extends Component {
  render() {
    return (
      <div>
        <Link to="contact">Contact</Link>
      </div>
    );
  }
}
