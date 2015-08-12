import React, { Component } from 'react';
import styles               from './header.css';
import Contact              from '../pages/contact';

export default class Header extends Component {
  constructor() {
    super();
    this.state = {display: false};
  }
  openContact = e => {
    e.preventDefault();
    this.setState({display: true});
  }
  closeContact = e => {
    e.preventDefault();
    this.setState({display: false});
  }

  render() {
    return (
      <div className={styles.header}>
        <div className={styles.container}>
          <a href="#" onClick={this.openContact.bind(this)}>Contact</a>
          {this.state.display ?
            <Contact close={this.closeContact.bind(this)}/>
          : null}
        </div>
      </div>
    );
  }
}
