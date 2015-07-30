import React, { Component } from 'react';
import styles from '../../styles/main.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {display: false};
  }
  show() {
    this.setState({display: !this.state.display});
  }

  render() {
    return (
      <div>
      <p className={styles.something} onClick={this.show.bind(this)}>Hey</p>
      {this.state.display ?
          <h2>Wazzupp</h2>
        : null}
      </div>
    );
  }
}
