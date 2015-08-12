import '../styles/main.css';
import styles                 from './app.css';
import React, { Component }   from 'react';
import { RouteHandler }       from 'react-router';
import Navigation             from './Navigation';
import Header                 from './Header';
import Tools                  from '../pages/tools';
import Contact                from '../pages/contact';

export default class App extends Component {
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
      <div className={this.state.display ? styles.container : null}>
      <RouteHandler />
      <Tools />
      <Navigation />
      <Header open={this.openContact.bind(this)}/>
      {this.state.display ?
        <Contact close={this.closeContact.bind(this)}/>
      : null}
      </div>
    );
  }
}
