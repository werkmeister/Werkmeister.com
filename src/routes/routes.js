import React     from 'react';
import { Route, DefaultRoute } from 'react-router';
import App       from '../containers/App';
import Home      from '../pages/home';
import Contact   from '../pages/contact';
import About     from '../pages/about';

export default (
  <Route handler={App}>
    <Route name="home" path="/" handler={Home} />
    <Route name="contact" path="/contact" handler={Contact} />
    <Route name="about" path="/about" handler={About} />
    <DefaultRoute handler={Home} />
  </Route>
);
