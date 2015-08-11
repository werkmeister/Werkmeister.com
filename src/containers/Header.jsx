import React, { Component } from 'react';
// import { Link }             from 'react-router';
// import logo                 from '../images/logo.svg';
// import logo                 from '../images/cursivelogo.svg';
import styles               from './header.css';
import Contact              from '../pages/contact';
// import styles               from '../styles/components.css';

        // <Link to="home"><img src={logo}/></Link>
          // <Link to="contact">Contact</Link>
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
