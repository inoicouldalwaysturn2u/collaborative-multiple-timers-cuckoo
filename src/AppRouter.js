import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import DefaultLayout from './components/DefaultLayout';
import NotFoundPage from './components/NotFoundPage';

import FrontPage from './frontend/FrontPage';

import AboutPage from './frontend/About';
import PrivacyPolicy from './frontend/PrivacyPolicy';
import RoomsGroup from './frontend/RoomsGroup';

const AppRouter = () => (
  <BrowserRouter>
    <DefaultLayout>
        <Switch>
          <Route path="/" component={ FrontPage } exact={ true } />

          <Route path="/group/:name" component={ RoomsGroup } exact={ true } />

          <Route path="/about" component={ AboutPage } exact={ true } />
          <Route path="/privacy-policy" component={ PrivacyPolicy } exact={ true } />

          <Route component={ NotFoundPage } />
        </Switch>
    </DefaultLayout>
  </BrowserRouter>
);

export default AppRouter;
