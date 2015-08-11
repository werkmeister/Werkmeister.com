import React, { Component } from 'react';
import { Link }             from 'react-router';
import styles               from './navigation.css';

        // <Link to="contact">Contact</Link>
export default class Navigation extends Component {
  render() {
    return (
      <div className={styles.navigation}>
        <div className={styles.container}>
          <a target="_blank" href="https://github.com/werkmeister">
            <i className="fa fa-github"></i>
          </a>
          <a target="_blank" href="https://twitter.com/jWerk_">
            <i className="fa fa-twitter"></i>
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/joshwerkmeister">
            <i className="fa fa-linkedin"></i>
          </a>
        </div>
      </div>
    );
  }
}
