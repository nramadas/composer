import React from 'react';

import { Composition } from '#components/composition/Composition';
import { Workspace } from '#components/layouts/Workspace';

export default function Compose() {
  return <Workspace leftRail={<div />} content={<Composition />} />;
}
