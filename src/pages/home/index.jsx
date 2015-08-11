import React, { Component } from 'react';
import styles               from '../../styles/components.css';
import background           from '../../images/imacbackground.jpeg';

        // <i className={'fa fa-github'}></i>
export default class Home extends Component {
  render() {
    return (
      <section className={styles.home}>
        <img src={background} />
        <div className={styles.overflow}/>
        <div className={styles.text}>
          <h4>my name is Josh Werkmeister</h4>
          <h1>I make <span className={styles.underline}>websites</span></h1>
        </div>
      </section>
    );
  }
}
