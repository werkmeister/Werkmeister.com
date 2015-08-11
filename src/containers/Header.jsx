import React, { Component } from 'react';
import { Link }             from 'react-router';
// import logo                 from '../images/logo.svg';
// import logo                 from '../images/cursivelogo.svg';
import styles               from './header.css';
// import styles               from '../styles/components.css';

        // <Link to="home"><img src={logo}/></Link>
export default class Header extends Component {
  render() {
    return (
      <div className={styles.header}>
        <div className={styles.container}>
          <Link to="contact">Contact</Link>
        </div>
      </div>
    );
  }
}
