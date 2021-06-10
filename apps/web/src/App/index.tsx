import React from 'react';
import { Route, Switch } from 'react-router-dom';
import 'normalize.css';

import { Page404 } from './Page404';
import { pages } from './pages';

export function App() {
  const routes = Object.keys(pages) as (keyof typeof pages)[];

  return (
    <Switch>
      {routes.map(route => (
        <Route exact key={route} component={pages[route]} path={route} />
      ))}
      <Route path="*" component={Page404} />
    </Switch>
  );
}
