import React, { Component } from 'react';
import { Link }             from 'react-router';
// import logo                 from '../images/logo.svg';
import logo                 from '../images/cursivelogo.svg';
// import styles               from '../styles/components.css';

export default class Header extends Component {
  render() {
    return (
        <Link to="home"><img src={logo}/></Link>
    );
  }
}
