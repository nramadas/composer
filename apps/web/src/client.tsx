import Cookies from 'js-cookie';
import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { App } from '#web/App';

const initialRefreshToken = Cookies.get('r_token');
const initialSessionToken = Cookies.get('s_token');

hydrate(
  <BrowserRouter>
    <App
      initialRefreshToken={initialRefreshToken}
      initialSessionToken={initialSessionToken}
    />
  </BrowserRouter>,
  document.getElementById('root'),
);

// @ts-ignore
if (module.hot) {
  // @ts-ignore
  module.hot.accept();
}
