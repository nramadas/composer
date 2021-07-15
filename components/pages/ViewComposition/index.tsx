import React from 'react';
import { useParams } from 'react-router-dom';

import { Minimal } from '#components/layouts/Minimal';
import { View } from '#components/viewComposition/View';
import { decompress } from '#lib/compress';
import { Composition } from '#lib/models/Composition';

interface Params {
  title: Composition['key'];
  payload: string;
}

export default function ViewComposition() {
  const params = useParams<Params>();
  const composition = decompress<Composition>(params.payload);

  return (
    <Minimal>
      <View composition={composition} />
    </Minimal>
  );
}
