import React, { Component } from 'react';
import styles               from './portfolio.css';
import ancho                from '../../../images/ar_mockups.png';
import twistn               from '../../../images/tnf_mockups.png';

export default class Portfolio extends Component {
  render() {
    return (
      <section className={styles.portfolio}>
        <h1>Portfolio</h1>
        <h4>Anchoripple</h4>
        <p>
          Lead Front-End developer for the Anchoripple organization. Given
          sketch designs and provided pixel perfect html and css. Based off
          a Yeoman generator built with gulp, bootstrap sass, and modernizer.
        </p>
        <img src={ancho} />
        <h4>Twist-N-Fish</h4>
        <p></p>
        <img src={twistn} />
      </section>
    );
  }
}
