import { enablePatches } from 'immer';
import React from 'react';
import { TransitionMotion, spring } from 'react-motion';
import { Provider } from 'react-redux';
import { Route, Switch, useLocation } from 'react-router-dom';
import 'normalize.css';

import { StorageProvider } from '#components/providers/Storage';
import { PageRoute } from '#lib/constants/Route';
import { AuthToken } from '#lib/models/AuthToken';
import { store } from '#lib/redux/store';
import { searchStringToDict } from '#lib/searchStringToDict';

import styles from './index.module.scss';
import { modals } from './modals';
import { overlays } from './overlays';
import { Page404 } from './Page404';
import { pages } from './pages';

enablePatches();

interface LocationState {
  backgroundLocation?: ReturnType<typeof useLocation>;
}

interface Props {
  gqlSchema?: any;
  initialAppState?: any;
  initialRefreshToken?: AuthToken['refresh'];
  initialSessionToken?: AuthToken['session'];
}

export function App(props: Props) {
  const location = useLocation<LocationState>();
  const overlayRoutes = Object.keys(overlays) as (keyof typeof overlays)[];
  const pageRoutes = Object.keys(pages) as (keyof typeof pages)[];
  const backgroundLocation = location.state?.backgroundLocation;
  const searchParams = searchStringToDict(location.search);

  return (
    <StorageProvider>
      <Provider store={store}>
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
                    key: location.key || location.pathname,
                    style: { opacity: spring(100) },
                  },
                ]
              : searchParams['open']
              ? [
                  {
                    data: searchParams['open'],
                    key: searchParams['open'],
                    style: { opacity: spring(100) },
                  },
                ]
              : []
          }
        >
          {interpolatedStyles => (
            <>
              {interpolatedStyles.map(item => {
                const Component =
                  typeof item.data === 'string'
                    ? modals[item.data as keyof typeof modals]
                    : null;

                return (
                  <div
                    className={styles.overlay}
                    key={item.key}
                    style={{
                      backgroundColor: `rgba(0,0,0,${
                        item.style.opacity / 200
                      })`,
                      pointerEvents: item.style.opacity < 90 ? 'none' : 'all',
                    }}
                  >
                    <div
                      style={{
                        opacity: `${item.style.opacity / 100}`,
                      }}
                    >
                      {Component ? (
                        <Component />
                      ) : typeof item.data !== 'string' ? (
                        <Switch location={item.data}>
                          {overlayRoutes.map(route => (
                            <Route
                              exact
                              key={route}
                              component={overlays[route]}
                            />
                          ))}
                        </Switch>
                      ) : null}
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </TransitionMotion>
      </Provider>
    </StorageProvider>
  );
}
