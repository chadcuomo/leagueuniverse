import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import WelcomePage from './WelcomePage';
import MainPage from './MainPage';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={WelcomePage} />
      <Route path="/mainpage" component={MainPage} />
    </Switch>
  </BrowserRouter>
);

export default Router;
