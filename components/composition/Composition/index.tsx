import cx from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';

import { Controls } from '#components/composition/Controls';
import { Editor } from '#components/composition/Editor';
import { Keyboard } from '#components/composition/Keyboard';
import { OverlayLink } from '#components/controls/OverlayLink';
import { Caption } from '#components/typography/Caption';
import { SaveComposition } from '#components/utilities/SaveComposition';
import { OverlayRoute, PageRoute } from '#lib/constants/Route';
import { useUserDependentQuery } from '#lib/hooks/useUserDependentQuery';

import fetchUserQuery from './fetchUser.gql';
import styles from './index.module.scss';

interface Props {
  className?: string;
}

export function Composition(props: Props) {
  const [result] = useUserDependentQuery({ query: fetchUserQuery });
  const isLoggedOut = !result.fetching && !result.data?.me;
  const userNotActivated = !result.fetching && !result.data?.me?.activated;

  return (
    <div
      className={cx(props.className, styles.container, {
        [styles.userNotActivated]: userNotActivated || isLoggedOut,
      })}
    >
      <div className={styles.controls}>
        <Controls />
      </div>
      {isLoggedOut ? (
        <div className={styles.activationBanner}>
          <Caption>
            Saving disabled! Please{' '}
            <OverlayLink to={OverlayRoute.Authentication}>
              create an account
            </OverlayLink>
            .
          </Caption>
        </div>
      ) : userNotActivated ? (
        <div className={styles.activationBanner}>
          <Caption>
            Saving disabled! Please{' '}
            <Link to={PageRoute.Profile}>activate your account</Link>.
          </Caption>
        </div>
      ) : undefined}
      <div className={styles.shadowBox} />
      <div className={styles.editorWrapper}>
        <Editor className={styles.editor} />
      </div>
      <Keyboard className={styles.keyboard} />
      <SaveComposition className={styles.saveComposition} />
    </div>
  );
}
