import React from 'react';

import { List } from '#components/compositions/List';
import { LeftRail } from '#components/controls/LeftRail';
import { Workspace } from '#components/layouts/Workspace';

export default function Compositions() {
  return <Workspace leftRail={<LeftRail />} content={<List />} />;
}
