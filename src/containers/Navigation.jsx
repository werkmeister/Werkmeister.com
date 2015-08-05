import React, { Component } from 'react';
import { Link }             from 'react-router';
import styles               from '../styles/main.css';

export default class Navigation extends Component {
  render() {
    return (
      <div className={styles.navigation}>
        <Link to="home">Home</Link>
        <Link to="contact">Contact</Link>
      </div>
    );
  }
}
