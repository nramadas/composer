import React from 'react';

import { Composer } from '#components/composer/Composer';
import { Workspace } from '#components/layouts/Workspace';

export default function Compose() {
  return <Workspace leftRail={<div />} content={<Composer />} />;
}
