import React, { Component } from 'react';
import backbone             from '../../images/logos/BackBone.svg';
import bower                from '../../images/logos/Bower.svg';
import css                  from '../../images/logos/css3.svg';
import git                  from '../../images/logos/Git.svg';
import grunt                from '../../images/logos/Grunt.svg';
import gulp                 from '../../images/logos/Gulp.svg';
import html                 from '../../images/logos/HTML5.svg';
import javascript           from '../../images/logos/JavaScript.svg';
import npm                  from '../../images/logos/npm.svg';
import react                from '../../images/logos/react.svg';
import sass                 from '../../images/logos/sass.svg';


export default class Tools extends Component {

  render() {
    let headerStyle = {
      color: '#c5c5c5'
    };

    let sectionStyle = {
      maxWidth: '980px',
      margin: 'auto'
    };

    let divStyle = {
      textAlign: 'center'
    };

    return (
      <section style={sectionStyle}>
        <h2 style={headerStyle}>
          I prefer writing things by hand. These are the tools I use
        </h2>
        <div style={divStyle}>
          <img src={backbone} />
          <img src={bower} />
          <img src={css} />
          <img src={git} />
          <img src={grunt} />
          <img src={gulp} />
          <img src={html} />
          <img src={javascript} />
          <img src={npm} />
          <img src={react} />
          <img src={sass} />
        </div>
      </section>
    );
  }
}
