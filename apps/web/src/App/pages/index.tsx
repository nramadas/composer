import React from 'react';
import Loadable from 'react-loadable';

import { PageRoute } from '#lib/constants/Route';

export const pages = {
  [PageRoute.Authentication]: Loadable({
    loader: () => import('#components/pages/Authentication'),
    loading: () => <div />,
  }),
  [PageRoute.Home]: Loadable({
    loader: () => import('#components/pages/Home'),
    loading: () => <div />,
  }),
};
