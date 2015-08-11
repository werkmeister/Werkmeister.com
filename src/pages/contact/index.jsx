import React, { Component } from 'react';
import styles               from './contact.css';

export default class Contact extends Component {
  static propTypes = {
    close: React.PropTypes.func.isRequired
  }

  render() {
    return (
      <section className={styles.contact}>
        <i onClick={this.props.close} className="fa fa-times"></i>
        <input type="text" placeholder="Name"/>
        <input type="text" placeholder="Organization"/>
        <input type="text" placeholder="Message"/>
      </section>
    );
  }
}
