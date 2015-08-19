import React, { Component } from 'react';
import { Link }             from 'react-router';
import styles               from './header.css';
import logo                 from '../images/logos/trianglelogo.svg';

export default class Header extends Component {
  static propTypes = {
    open: React.PropTypes.func.isRequired
  }
          // <img src={logo6} style="width: 40px;"/>

  render() {
    return (
      <div className={styles.header}>
        <div className={styles.container}>
          <Link to="home"><img src={logo} style={{width: '30px'}}/></Link>
          <a href="#" onClick={this.props.open}>
            Contact
          </a>
        </div>
      </div>
    );
  }
}
