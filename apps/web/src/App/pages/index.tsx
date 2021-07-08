import React from 'react';
import Loadable from 'react-loadable';

import { LeftRail } from '#components/controls/LeftRail';
import { Workspace } from '#components/layouts/Workspace';
import { PageRoute } from '#lib/constants/Route';

function WorkspaceFallback() {
  return <Workspace leftRail={<LeftRail />} content={<div />} />;
}

export const pages = {
  [PageRoute.Authentication]: Loadable({
    loader: () => import('#components/pages/Authentication'),
    loading: () => <div />,
  }),
  [PageRoute.Compose]: Loadable({
    loader: () => import('#components/pages/Compose'),
    loading: () => <WorkspaceFallback />,
  }),
  [PageRoute.Compositions]: Loadable({
    loader: () => import('#components/pages/Compositions'),
    loading: () => <WorkspaceFallback />,
  }),
  [PageRoute.Home]: Loadable({
    loader: () => import('#components/pages/Home'),
    loading: () => <div />,
  }),
};
