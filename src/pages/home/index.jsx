import React, { Component } from 'react';
import Tools                from './tools';
import Portfolio            from './portfolio';
import styles               from './home.css';

export default class Home extends Component {
  render() {
    return (
      <section>
        <section className={styles.home}>
          <div className={styles.text}>
            <h1>
              Web Developer
            </h1>
            <h4>
              I build stuff
            </h4>
          </div>
        </section>
        <Tools />
        <Portfolio />
      </section>
    );
  }
}
