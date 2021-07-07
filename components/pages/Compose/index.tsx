import React from 'react';

import { Composition } from '#components/composition/Composition';
import { LeftRail } from '#components/controls/LeftRail';
import { Workspace } from '#components/layouts/Workspace';

export default function Compose() {
  return <Workspace leftRail={<LeftRail />} content={<Composition />} />;
}
