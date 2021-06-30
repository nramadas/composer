import React from 'react';
import Loadable from 'react-loadable';

import { ModalRoute } from '#lib/constants/Route';

export const modals = {
  [ModalRoute.PickRaaga]: Loadable({
    loader: () => import('#components/modals/PickRaaga'),
    loading: () => <div />,
  }),
};
