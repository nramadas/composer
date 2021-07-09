import React from 'react';
import { useParams } from 'react-router-dom';

import { Minimal } from '#components/layouts/Minimal';
import { View } from '#components/viewComposition/View';
import { Composition } from '#lib/models/Composition';
import { User } from '#lib/models/User';

interface Params {
  key: Composition['key'];
  title: Composition['key'];
  userId: User['id'];
}

export default function ViewComposition() {
  const params = useParams<Params>();

  return (
    <Minimal>
      <View userId={params.userId} compositionKey={params.key} />
    </Minimal>
  );
}
