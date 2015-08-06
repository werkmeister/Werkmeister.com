import React, { Component } from 'react';
import styles               from '../../styles/components.css';

export default class Home extends Component {
  render() {
    return (
      <section className={styles.home}>
        HOME PAGE!!
        <i className={'fa fa-battery-full'}></i>
      </section>
    );
  }
}
