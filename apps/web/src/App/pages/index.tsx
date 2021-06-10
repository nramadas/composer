import React from 'react';
import Loadable from 'react-loadable';

import { Route } from '#lib/constants/Route';

export const pages = {
  [Route.Home]: Loadable({
    loader: () => import('#components/pages/Home'),
    loading: () => <div />,
  }),
};
