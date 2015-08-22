import React, { Component } from 'react';
import styles               from './contact.css';

export default class Contact extends Component {
  static propTypes = {
    close: React.PropTypes.func.isRequired
  }

  render() {
    return (
      <section className={styles.contact}>
        <div style={{
            maxWidth: '980px',
            textAlign: 'right',
            margin: 'auto',
            padding: '20px'}}>
          <i onClick={this.props.close} className="fa fa-times"></i>
          <p>Let's talk business</p>
          <input type="text" placeholder="Name"/>
          <input type="text" placeholder="Organization"/>
          <input type="text" placeholder="Message"/>
          <div style={{textAlign: 'center'}}>
            <button form="emailForm" className={styles.submit}>
              <i className="fa fa-paper-plane-o"></i>
            </button>
          </div>
        </div>
      </section>
    );
  }
}
