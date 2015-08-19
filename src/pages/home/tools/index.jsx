import React, { Component } from 'react';
import styles               from './tools.css';
import backbone             from '../../../images/logos/BackBone.svg';
import bower                from '../../../images/logos/Bower.svg';
import css                  from '../../../images/logos/css3.svg';
import git                  from '../../../images/logos/Git.svg';
import grunt                from '../../../images/logos/Grunt.svg';
import gulp                 from '../../../images/logos/Gulp.svg';
import html                 from '../../../images/logos/HTML5.svg';
import javascript           from '../../../images/logos/JavaScript.svg';
import npm                  from '../../../images/logos/npm.svg';
import react                from '../../../images/logos/react.svg';
import sass                 from '../../../images/logos/sass.svg';


export default class Tools extends Component {
  render() {
    return (
      <section className={styles.tools}>
        <h2 className={styles.header}>
          I prefer writing things by hand. These are the tools I use
        </h2>
        <div className={styles.images}>
          <img src={javascript} />
          <img src={react} />
          <img src={npm} />
          <img src={git} />
          <img src={css} />
          <img src={html} />
          <img src={sass} />
          <img src={backbone} />
          <img src={gulp} />
          <img src={bower} />
          <img src={grunt} />
        </div>
      </section>
    );
  }
}
