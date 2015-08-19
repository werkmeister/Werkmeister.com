import React, { Component } from 'react';
import styles               from './home.css';

export default class Home extends Component {
  render() {
    return (
            // <span className={styles.underline}>St. Louis</span></h1>
      <section className={styles.home}>
        <div className={styles.text}>
          <h1>
            Software Developer
          </h1>
          <h4>
            dedicated to building websites and applications {' '}
            just as elegant on the inside as they are on the outside
          </h4>
        </div>
      </section>
    );
  }
}
