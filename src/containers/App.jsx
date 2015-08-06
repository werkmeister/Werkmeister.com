import '../styles/main.css';
import React, { Component }   from 'react';
import { RouteHandler }       from 'react-router';
import Navigation             from './Navigation';
import Header                 from './Header';
import Contact                from '../pages/contact';

export default class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {display: false};
  // }
  // show() {
  //   this.setState({display: !this.state.display});
  // }

  render() {
    return (
      <div>
      <Header />
      <Navigation />
      <RouteHandler />
      <Contact />
      </div>
    );
  }
}
