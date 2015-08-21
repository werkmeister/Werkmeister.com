import React, { Component } from 'react';
import Tools                from './tools';
import Portfolio            from './portfolio';
import styles               from './home.css';

export default class Home extends Component {
  render() {
    return (
            // <span className={styles.underline}>St. Louis</span></h1>
            // as eligantly on the inside as they are on the outside
      <section>
        <section className={styles.home}>
          <div className={styles.text}>
            <h1>
              Software Developer
            </h1>
            <h4>
              dedicated to building websites and applications {' '}
              elegantly from the inside out
            </h4>
          </div>
        </section>
        <Tools />
        <Portfolio />
      </section>
    );
  }
}
