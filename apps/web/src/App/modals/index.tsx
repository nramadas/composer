import React from 'react';
import Loadable from 'react-loadable';

import { ModalRoute } from '#lib/constants/Route';

export const modals = {
  [ModalRoute.Confirm]: Loadable({
    loader: () => import('#components/modals/Confirm'),
    loading: () => <div />,
  }),
  [ModalRoute.PickRaaga]: Loadable({
    loader: () => import('#components/modals/PickRaaga'),
    loading: () => <div />,
  }),
  [ModalRoute.PickTaala]: Loadable({
    loader: () => import('#components/modals/PickTaala'),
    loading: () => <div />,
  }),
};
