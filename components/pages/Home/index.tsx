import React from 'react';

import { GlobalHeader } from '#components/controls/GlobalHeader';
import { Hero } from '#components/eyecandy/Hero';
import { LandingPage } from '#components/layouts/LandingPage';

import styles from './index.module.scss';

export default function Home() {
  return (
    <LandingPage
      header={<GlobalHeader />}
      content={
        <div>
          <Hero className={styles.hero} />
        </div>
      }
    />
  );
}
