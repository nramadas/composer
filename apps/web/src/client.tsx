import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { App } from '#web/App';

async function initialize() {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById('root'),
  );

  document.body.style.opacity = '1';

  // @ts-ignore
  if (module.hot) {
    // @ts-ignore
    module.hot.accept();
  }
}

initialize();
