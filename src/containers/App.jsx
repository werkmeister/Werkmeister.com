import '../styles/main.css';
import React, { Component }   from 'react';
import { RouteHandler }       from 'react-router';
import Navigation             from './Navigation';
import Header                 from './Header';
import Tools                from '../pages/tools';

export default class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {background: false};
  // }
  // show() {
  // }

  // handleResize() {
  //   if ( window.scrollY >= window.innerHeight) {
  //     this.setState({background: !this.state.background});
  //   }
  // }
  // componentDidMount() {
  //   window.addEventListener('scroll', this.handleResize);
  // }
  // componentWillUnmount() {
  //   window.removeEventListener('scroll', this.handleResize);
  // }

  render() {
    return (
      <div>
      <RouteHandler />
      <Tools />
      <Navigation />
      <Header />
      </div>
    );
  }
}
