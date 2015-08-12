import React, { Component } from 'react';
import styles               from './header.css';

export default class Header extends Component {
  static propTypes = {
    open: React.PropTypes.func.isRequired
  }

  render() {
    return (
      <div className={styles.header}>
        <div className={styles.container}>
          <a href="#" onClick={this.props.open}>Contact</a>
        </div>
      </div>
    );
  }
}
