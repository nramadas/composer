import React from 'react';
import Loadable from 'react-loadable';

import { OverlayRoute } from '#lib/constants/Route';

export const overlays = {
  [OverlayRoute.Authentication]: Loadable({
    loader: () => import('#components/overlays/Authentication'),
    loading: () => <div />,
  }),
};
