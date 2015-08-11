import React, { Component } from 'react';
import { Link }             from 'react-router';
import styles               from './navigation.css';

        // <Link to="contact">Contact</Link>
export default class Navigation extends Component {
  render() {
    return (
      <div className={styles.navigation}>
        <div className={styles.container}>
          <i className="fa fa-github"></i>
          <i className="fa fa-twitter"></i>
          <i className="fa fa-linkedin"></i>
        </div>
      </div>
    );
  }
}
