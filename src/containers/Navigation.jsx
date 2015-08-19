import React, { Component } from 'react';
import styles               from './navigation.css';

export default class Navigation extends Component {
  render() {
    return (
      <div className={styles.navigation}>
        <div className={styles.container}>
          <a href="#" className={styles.something}>
            About
          </a>
          <a target="_blank" href="https://github.com/werkmeister">
            <i className="fa fa-github" title="github"></i>
          </a>
          <a target="_blank" href="https://twitter.com/jWerk_">
            <i className="fa fa-twitter" title="twitter"></i>
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/joshwerkmeister">
            <i className="fa fa-linkedin" title="linked in"></i>
          </a>
        </div>
      </div>
    );
  }
}
