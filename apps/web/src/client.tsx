import Cookies from 'js-cookie';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { App } from '#web/App';

async function initialize() {
  const initialRefreshToken = Cookies.get('r_token');
  let initialSessionToken = Cookies.get('s_token');

  if (initialRefreshToken) {
    const result = await fetch(process.env.RAZZLE_GQL_ENDPOINT!, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          mutation ($refresh: ID!) {
            refreshSession(refresh: $refresh) {
              session
            }
          }
        `,
        variables: {
          refresh: initialRefreshToken,
        },
      }),
    }).then(r => r.json());

    if (result.data?.refreshSession) {
      initialSessionToken = result.data.refreshSession.session;
      Cookies.set('s_token', initialSessionToken || '', { path: '/' });
    }
  }

  render(
    <BrowserRouter>
      <App
        initialRefreshToken={initialRefreshToken}
        initialSessionToken={initialSessionToken}
      />
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
