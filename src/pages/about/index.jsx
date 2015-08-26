import React, { Component } from 'react';
import styles               from './about.css';

export default class About extends Component {
        // <h1>Josh Werkmeister</h1>
  render() {
    return (
      <section className={styles.about}>
        <h1>Josh Werkmeister</h1>
        <div className={styles.item}>
          <h5>About -</h5>
          <p>
            I'm Josh Werkmeister
          </p>
        </div>
        <div className={styles.item}>
          <h5>Experience -</h5>
          <ul>
            <li>
            <p className={styles.title}>Software Developer</p>
            <p className="company">Safety National</p>
            <p className="timeframe">June 2014 - Present</p>
            </li>
            <li>
            <p className={styles.title}>Front-End Developer</p>
            <p className="company">Anchoripple</p>
            <p className="timeframe">April 2015 - Present</p>
            </li>
            <li>
            <p className={styles.title}>Front-End Developer</p>
            <p className="company">Twist-N-Fish</p>
            <p className="timeframe">June 2013 - April 2015</p>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}
