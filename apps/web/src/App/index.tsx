import Cookies from 'js-cookie';
import React from 'react';
import { TransitionMotion, spring } from 'react-motion';
import { Route, Switch, useLocation } from 'react-router-dom';
import type { ssrExchange } from 'urql';
import 'normalize.css';

import { AuthTokenProvider } from '#components/providers/AuthToken';
import { URQLProvider } from '#components/providers/Urql';
import { TokenRefresher } from '#components/utilities/TokenRefresher';
import { PageRoute } from '#lib/constants/Route';
import { AuthToken } from '#lib/models/AuthToken';

import styles from './index.module.scss';
import { overlays } from './overlays';
import { Page404 } from './Page404';
import { pages } from './pages';

type SSRExchange = ReturnType<typeof ssrExchange>;

interface LocationState {
  backgroundLocation?: ReturnType<typeof useLocation>;
}

interface Props {
  gqlSchema?: any;
  initialAppState?: any;
  initialRefreshToken?: AuthToken['refresh'];
  initialSessionToken?: AuthToken['session'];
  ssrExchange?: SSRExchange;
}

export function App(props: Props) {
  const location = useLocation<LocationState>();
  const overlayRoutes = Object.keys(overlays) as (keyof typeof overlays)[];
  const pageRoutes = Object.keys(pages) as (keyof typeof pages)[];
  const backgroundLocation = location.state?.backgroundLocation;

  return (
    <AuthTokenProvider
      initialRefresh={props.initialRefreshToken}
      initialSession={props.initialSessionToken}
      preserveRefresh={refresh =>
        Cookies.set('r_token', refresh, { path: '/' })
      }
      preserveSession={session =>
        Cookies.set('s_token', session, { path: '/' })
      }
    >
      <TokenRefresher />
      <URQLProvider
        initialState={props.initialAppState}
        schema={props.gqlSchema}
        ssrExchange={props.ssrExchange}
      >
        <Switch location={backgroundLocation || location}>
          {pageRoutes.map(route => (
            <Route
              exact={route === PageRoute.Home}
              key={route}
              component={pages[route]}
              path={route}
            />
          ))}
          <Route path="*" component={Page404} />
        </Switch>
        <TransitionMotion
          willEnter={() => ({
            opacity: 0,
          })}
          willLeave={() => ({
            opacity: spring(0),
          })}
          styles={
            backgroundLocation
              ? [
                  {
                    data: location,
                    key: location.hash,
                    style: { opacity: spring(100) },
                  },
                ]
              : []
          }
        >
          {interpolatedStyles => (
            <>
              {interpolatedStyles.map(item => (
                <div
                  className={styles.overlay}
                  key={item.key}
                  style={{
                    backgroundColor: `rgba(0,0,0,${item.style.opacity / 200})`,
                  }}
                >
                  <div
                    style={{
                      opacity: `${item.style.opacity / 50}`,
                      transform: `scale(${0.75 + item.style.opacity / 400})`,
                    }}
                  >
                    <Switch location={item.data}>
                      {overlayRoutes.map(route => (
                        <Route exact key={route} component={overlays[route]} />
                      ))}
                    </Switch>
                  </div>
                </div>
              ))}
            </>
          )}
        </TransitionMotion>
      </URQLProvider>
    </AuthTokenProvider>
  );
}
