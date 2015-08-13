import React, { Component } from 'react';
import styles               from './header.css';
import logo                 from '../images/logos/logo.svg';
// import logo                 from '../images/cursivelogo.svg';

export default class Header extends Component {
  static propTypes = {
    open: React.PropTypes.func.isRequired
  }

          // <img src={logo} />
  render() {
    return (
      <div className={styles.header}>
        <div className={styles.container}>
          <img src={logo} />
          <a href="#" onClick={this.props.open}>
            Contact
          </a>
        </div>
      </div>
    );
  }
}
